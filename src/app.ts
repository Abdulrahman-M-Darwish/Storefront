import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import dotenv from 'dotenv';
dotenv.config();

export const app = express();

app.use(bodyParser.json());
app.use(router);

app.listen(3000);
