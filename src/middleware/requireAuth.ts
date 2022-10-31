import { NextFunction, Request, Response } from 'express';
import { verify } from '../utils/jwt';
import dotenv from 'dotenv';
import { JwtPayload } from 'jsonwebtoken';
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user: string | JwtPayload;
    }
  }
}

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }
  const token = authorization.split(' ')[1];
  try {
    const user = verify(token);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Request not authorizied' });
  }
};

export default requireAuth;
