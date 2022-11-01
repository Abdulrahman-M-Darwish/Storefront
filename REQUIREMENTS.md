# routes for the required endpoints.

- users routes
  -- /users [GET] Token Required
  -- /users/:userId [GET] Token Required
  -- /users/create-user [post]
  --- body:{password: string, firstName: string, lastName: string}
- products routes
  -- /products [GET]
  -- /products/:productId [GET]
  -- /products/create-product [POST] Token Required
  --- body: {name: string, price: number}
- orders routes
  -- /orders/:userId [GET] Token Required
  -- /orders/completed/:userId [GET] Token Required
  -- /orders/:orderId/products [GET] Token Required
  -- /orders/:orderId/product [POST] Token Required
  --- body: {quantity: number, productId: number}
  -- /orders/complete [POST] Token Required
  --- body: {orderId: number | string}
  -- /orders/create-order [POST] Token Required
  --- body: {userId: number | string}
  -- /orders/del-order [POST] Token Required
  --- body: {orderId: number | string}
  -- /orders/del-product [POST] Token Required
  --- {"productId": number | string, "orderId": number | string}

# database schema

- users
  -- id SERIAL PRIMARY KEY,
  -- first_name VARCHAR(15),
  -- last_name VARCHAR(15),
  -- password VARCHAR(255)
- products
  -- id SERIAL PRIMARY KEY,
  -- name VARCHAR(100),
  -- price INTEGER
- orders
  -- id SERIAL PRIMARY KEY,
  -- status status_enum,
  -- user_id BIGINT REFERENCES users(id)
- order_products
  -- id SERIAL PRIMARY KEY,
  -- quantity INTEGER,
  -- product_id BIGINT REFERENCES products(id),
  -- order_id BIGINT REFERENCES orders(id)
