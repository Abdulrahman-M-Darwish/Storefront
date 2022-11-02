import { Router } from 'express';
import users from './users';
import products from './products';
import orders from './orders';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Welcome to my fake shop</h1>');
});

router.use('/users', users);

router.use('/products', products);

router.use('/orders', orders);

export default router;
