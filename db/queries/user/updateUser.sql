update users 
set name = $2, email = $3, username = $4, website = $5, instagram = $6, location = $7, bio = $8
where authid = $1
returning *