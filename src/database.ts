import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { ENV, DATABASE, HOST, USER, PASSWORD, TESTING_DB, DB_PORT } =
  process.env;

const client = new Pool({
  database: ENV === 'dev' ? DATABASE : TESTING_DB,
  host: HOST,
  user: USER,
  password: PASSWORD,
  port: DB_PORT as unknown as number,
});

export default client;
