import { Request, Response } from 'express';
import { UserStore } from '../models/user';
import { createToken } from '../utils/jwt';

const store = new UserStore();

const index = async (req: Request, res: Response) => {
  try {
    const users = await store.index();
    res.send(users);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const users = await store.index();
    res.send(users);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await store.show(id);
    user.length
      ? res.json(user[0])
      : res.status(404).json({ error: '404 - User not found >_<' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const create = async (req: Request, res: Response) => {
  const { password, firstName, lastName } = req.body;
  try {
    const user = await store.create(password, firstName, lastName);
    const token = createToken(user[0]);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { index, show, create };
