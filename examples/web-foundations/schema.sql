CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL CHECK(length(name) BETWEEN 1 AND 60),
    price INTEGER NOT NULL CHECK(price >= 0 AND price <= 100000)
);
