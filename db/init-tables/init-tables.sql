CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    authid varchar(42) UNIQUE NOT NULL,
    name varchar(64) NOT NULL,
    username varchar(42) UNIQUE,
    profilepic varchar(128),
    email varchar(60) UNIQUE,
    bio varchar(240),
    location varchar(60),
    website varchar(60),
    instagram varchar(60) UNIQUE
)