CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    authid varchar(42) UNIQUE NOT NULL,
    name varchar(64) NOT NULL,
    username varchar(42) UNIQUE

)