CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(15),
  last_name VARCHAR(15),
  password VARCHAR(255)
)