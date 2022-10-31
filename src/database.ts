import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { ENV, DATABASE, HOST, USER, PASSWORD, TESTING_DB } = process.env;

const client = new Pool({
  database: ENV === 'dev' ? DATABASE : TESTING_DB,
  host: HOST,
  user: USER,
  password: PASSWORD,
});

export default client;
