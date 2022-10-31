import { query } from '../utils/query';

export interface Product {
  readonly id: string;
  name: string;
  price: number;
}

export class ProductStore {
  async index() {
    try {
      const data = await query('SELECT * FROM products');
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async show(id: string): Promise<object[]> {
    try {
      return await query('SELECT * FROM products WHERE id=($1)', [id]);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async create(name: string, price: number): Promise<object[]> {
    try {
      return await query(
        'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
        [name, price]
      );
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
