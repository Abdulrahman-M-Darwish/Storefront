CREATE TYPE status_enum AS ENUM ('active', 'complete');
CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY,
  status status_enum,
  user_id BIGINT REFERENCES users(id)
)