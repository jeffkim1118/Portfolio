DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS visitorsCounter;

CREATE TABLE project (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    img TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL
);

CREATE TABLE visitorsCounter(
    id INTEGER PRIMARY KEY,
    counter INTEGER NOT NULL
)