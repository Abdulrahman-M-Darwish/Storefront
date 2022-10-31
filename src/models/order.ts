import { query } from '../utils/query';

export const enum Status {
  ACTIVE = 'active',
  COMPLETE = 'complete',
}

export interface Order {
  readonly id: string;
  status: Status;
  userId: string;
}

export class OrderStore {
  async index(userId: string) {
    try {
      const data = await query('SELECT * FROM orders WHERE user_id=($1)', [
        userId,
      ]);
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async create(userId: string) {
    try {
      const data = await query(
        'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *',
        [userId, 'active']
      );
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async showCompleted(userId: string) {
    try {
      const data = await query(
        "SELECT * FROM orders WHERE status='complete' AND user_id=($1)",
        [userId]
      );
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async completeOrder(orderId: string) {
    try {
      const data = await query(
        "UPDATE orders SET status='complete' WHERE id=($1) RETURNING *",
        [orderId]
      );
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async deleteOrder(orderId: string) {
    try {
      const orderProducts = await query(
        'DELETE FROM order_product WHERE order_id=($1) RETURNING *',
        [orderId]
      );
      const order = await query(
        'DELETE FROM orders WHERE id=($1) RETURNING *',
        [orderId]
      );
      return { order, orderProducts };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async addProduct(quantity: number, productId: string, orderId: string) {
    try {
      const data = await query('SELECT status FROM orders WHERE id=($1)', [
        orderId,
      ]);
      if ((data[0] as Order).status !== Status.ACTIVE) {
        throw new Error("Can't Add Products to Complete Order");
      }
    } catch (error) {
      throw new Error((error as Error).message);
    }
    try {
      const data = await query(
        'INSERT INTO order_product (quantity, product_id, order_id) VALUES ($1, $2, $3) RETURNING *',
        [quantity, productId, orderId]
      );
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async deleteProduct(productId: string, orderId: string) {
    try {
      const data = await query(
        'DELETE FROM order_product WHERE product_id=($1) AND order_id=($2) RETURNING *',
        [productId, orderId]
      );
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async orderProducts(orderId: string) {
    try {
      const data = await query(
        'SELECT * FROM products INNER JOIN order_product ON order_product.order_id=($1) AND products.id=order_product.product_id',
        [orderId]
      );
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
