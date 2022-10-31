import { Order, OrderStore, Status } from '../models/order';
import { Request, Response } from 'express';

const store = new OrderStore();

const index = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const data = await store.index(userId);
    res.json(data);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
};

const create = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const data = await store.create(userId);
    res.json(data);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
};

const showCompleted = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const data = await store.showCompleted(userId);
    res.json(data);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
};

const completeOrder = async (req: Request, res: Response) => {
  const { orderId } = req.body;
  try {
    const data = await store.completeOrder(orderId);
    res.json(data);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  const { orderId } = req.body;
  try {
    const data = await store.deleteOrder(orderId);
    res.json(data);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
};

const addProduct = async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const { quantity, productId } = req.body;
  try {
    const data = await store.addProduct(quantity, productId, orderId);
    res.json(data);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { productId, orderId } = req.body;
  try {
    const data = await store.deleteProduct(productId, orderId);
    res.json(data);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
};

const orderProducts = async (req: Request, res: Response) => {
  const { orderId } = req.params;
  try {
    const data = await store.orderProducts(orderId);
    res.json(data);
  } catch (error) {
    res.json({ error: (error as Error).message });
  }
};

export {
  index,
  create,
  showCompleted,
  completeOrder,
  deleteOrder,
  addProduct,
  deleteProduct,
  orderProducts,
};
