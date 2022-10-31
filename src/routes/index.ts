import { Router } from 'express';
import users from './users';
import products from './products';
import orders from './orders';

const router = Router();

router.use('/users', users);
router.use('/products', products);
router.use('/orders', orders);

export default router;
