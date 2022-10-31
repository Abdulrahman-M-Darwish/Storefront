import { Request, Response } from 'express';
import { ProductStore } from '../models/product';

const store = new ProductStore();

const index = async (req: Request, res: Response) => {
  try {
    const product = await store.index();
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await store.show(id);
    product.length
      ? res.json(product[0])
      : res.status(404).json({ error: '404 - Product not found >_<' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const create = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  try {
    const product = await store.create(name, price);
    res.json(product[0]);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { index, show, create };
