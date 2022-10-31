import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/user';
dotenv.config();

const { SECRET } = process.env;

const createToken = (user: User) => {
  return jwt.sign(user, SECRET as jwt.Secret);
};

const verify = (token: string) => jwt.verify(token, SECRET as jwt.Secret);

export { createToken, verify };
