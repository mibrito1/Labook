-- Active: 1695677834879@@127.0.0.1@3306

CREATE TABLE
    users(
        id TEXT PRIMARY KEY NOT NULL UNIQUE,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        created_at TEXT NOT NULL
    );

DROP TABLE users;

SELECT * FROM users;