import { query } from '../utils/query';
import bcrypt from 'bcrypt';

export interface User {
  readonly id: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class UserStore {
  async index(): Promise<User[]> {
    try {
      return await query('SELECT * FROM users');
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async show(id: string): Promise<User[]> {
    try {
      return await query('SELECT * FROM users WHERE id=($1)', [id]);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async create(
    password: string,
    firstName: string,
    lastName: string
  ): Promise<User[]> {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      return await query(
        'INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING *',
        [firstName, lastName, hash]
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
