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

CREATE TABLE
    posts(
        id TEXT UNIQUE PRIMARY KEY NOT NULL,
        creator_id TEXT NOT NULL,
        content TEXT NOT NULL,
        likes INTEGER NOT NULL,
        dislikes INTEGER NOT NULL,
        created_at TEXT DEFAULT (DATE('now', 'localtime')),
        updated_at TEXT NOT NULL,
        Foreign Key (creator_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

SELECT * FROM posts;

CREATE TABLE
    like_dislike(
        user_id TEXT NOT NULL,
        post_id TEXT NOT NULL,
        like INTEGER NOT NULL,
        Foreign Key (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
        Foreign Key (post_id) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE
    );