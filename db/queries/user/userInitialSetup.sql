update users 
set name = $2, username = $3, email = $4
where authid = $1
returning *