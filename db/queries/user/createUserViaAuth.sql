INSERT INTO users (authID, name, email, profilepic)
VALUES ($1, $2, $3, $4)
RETURNING *