# how to setup the database

- first you need to edit database.json to your local postgres database sittings
- create .env file and and assign the following variabels
  -- ENV: dev: uses the development db | test: creating db called wd_test to run the tests then get removed
  -- DATABASE: the name of the dev database
  -- TESTING_DB: the name of the testing database
  -- HOST: the database host
  -- USER: the user that have acces to your db
  -- PASSWORD: user password
  -- SECRET: JWT secret
  -- DB_PORT: database port
- note: if you want to change the testing db name change from test command in package.json

# how to connect to the database

- run migrate command to get you all the tabels you need to use the models
  that it you can use the database now

# ports the backend and database are running on

server: http://localhost:3000
database: localhost:5432

# package installation instructions

- just run: yarn to install the packages
