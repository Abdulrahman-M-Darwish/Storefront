# how to setup and connect to the database

- first you need to edit database.json to your local postgres database sittings
- create .env file and and assign the following variabels
  -- ENV: dev: uses the development db | test: creating db called wd_test to run the tests then get removed
  -- DATABASE: the name of the dev database
  -- TESTING_DB: the name of the testing database
  -- HOST: the database host
  -- USER: the user that have acces to your db
  -- PASSWORD: user password
  -- SECRET: JWT secret
- note: if you want to change the testing db name change the TESTING_DB in .env and from test command in package.json
- run migrate command to get you all the tabels you need to use the models

# ports the backend and database are running on

server: 3000
database: localhost

# package installation instructions

- just run: yarn to install the packages
