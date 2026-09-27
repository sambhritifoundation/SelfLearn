# Website fundamentals: frontend to cloud

Open GUIDE.html for illustrated lessons, bilingual explanations, complete AI prompts and official reference links.

Open index.html directly for the labelled browser-only simulation. For a real frontend/backend/database: install Python 3, open a terminal in this folder and run `py server.py` on Windows or `python3 server.py` on macOS/Linux. Visit http://127.0.0.1:8000/?mode=server. Stop with Ctrl+C. To use port 8001: `py server.py --port 8001` and open the new printed URL. No third-party Python packages are needed.

Files: index.html = HTML; styles.css = CSS; app.js = browser JavaScript; server.py = HTTP API; schema.sql = table structure. The generated data/market.db stays local. Do not upload the database. The local server serves only an explicit allowlist of public files and binds to 127.0.0.1. It is a learning server, not a production deployment. GET /api/products reads; POST /api/products creates with JSON {"name":"Notebook","price":40}. SQLite writes are parameterised. UPDATE/DELETE API routes are not implemented.

Check: add a row, refresh and restart the server: it remains. Browser-simulation rows instead reset on refresh. Test invalid inputs and 404. GitHub Pages can host only the simulation; a deployed real API needs compatible hosting, persistence and access controls.

Official references were checked 27 September 2026. No hosting account or purchase is needed to read these lessons.
