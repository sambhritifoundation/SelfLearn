"""Local teaching server: run `py server.py`, then open the printed URL.
Uses only Python's standard library; this is not a production server.
"""
import argparse
import json
import sqlite3
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
STATIC = {"/": ("index.html", "text/html"), "/index.html": ("index.html", "text/html"),
          "/styles.css": ("styles.css", "text/css"), "/app.js": ("app.js", "text/javascript"),
          "/GUIDE.html": ("GUIDE.html", "text/html")}
STATIC.update({"/visuals/" + p.name: ("visuals/" + p.name, "image/svg+xml")
               for p in (ROOT / "visuals").glob("*.svg")})

def initialise(database):
    database.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(database) as connection:
        connection.executescript((ROOT / "schema.sql").read_text(encoding="utf-8"))
        if connection.execute("SELECT COUNT(*) FROM products").fetchone()[0] == 0:
            connection.executemany("INSERT INTO products (name, price) VALUES (?, ?)",
                                   [("Rice · 1 kg", 60), ("Dal · 1 kg", 110)])

class Handler(BaseHTTPRequestHandler):
    def send(self, status, data, content_type="application/json"):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8") if content_type == "application/json" else data
        self.send_response(status)
        self.send_header("Content-Type", content_type + "; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        route = urlsplit(self.path).path
        if route == "/api/products":
            with sqlite3.connect(self.server.database) as connection:
                connection.row_factory = sqlite3.Row
                rows = [dict(row) for row in connection.execute("SELECT id, name, price FROM products ORDER BY id")]
            self.send(200, rows)
        elif route in STATIC:
            filename, content_type = STATIC[route]
            self.send(200, (ROOT / filename).read_bytes(), content_type)
        else:
            self.send(404, {"error": "Route not found"})

    def do_POST(self):
        if urlsplit(self.path).path != "/api/products":
            return self.send(404, {"error": "Route not found"})
        if self.headers.get_content_type() != "application/json":
            return self.send(415, {"error": "Use Content-Type: application/json"})
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if not 0 < length <= 4096:
                return self.send(413, {"error": "JSON body must be 1–4096 bytes"})
            data = json.loads(self.rfile.read(length))
            if not isinstance(data, dict):
                raise ValueError()
            name, price = data.get("name"), data.get("price")
            if not isinstance(name, str) or not 1 <= len(name.strip()) <= 60 or type(price) is not int or not 0 <= price <= 100000:
                raise ValueError()
        except (ValueError, UnicodeError):
            return self.send(400, {"error": "Use a name of 1–60 characters and a whole price from 0 to 100000"})
        with sqlite3.connect(self.server.database) as connection:
            cursor = connection.execute("INSERT INTO products (name, price) VALUES (?, ?)", (name.strip(), price))
            product_id = cursor.lastrowid
        self.send(201, {"id": product_id, "name": name.strip(), "price": price})

    def do_PUT(self):
        self.send(405, {"error": "This lesson implements GET and POST only"})

    do_DELETE = do_PUT

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--db", type=Path, default=ROOT / "data" / "market.db")
    args = parser.parse_args()
    initialise(args.db)
    server = HTTPServer(("127.0.0.1", args.port), Handler)
    server.database = args.db
    print(f"Open http://127.0.0.1:{server.server_port}/?mode=server — stop with Ctrl+C", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

if __name__ == "__main__":
    main()
