import { Router } from 'express';
import {
  index,
  addProduct,
  completeOrder,
  create,
  deleteOrder,
  deleteProduct,
  showCompleted,
  orderProducts,
} from '../controllers/orders';
import requireAuth from '../middleware/requireAuth';

const router = Router();
router.use(requireAuth);
router.get('/:userId', index);
router.post('/:orderId/product', addProduct);
router.post('/complete', completeOrder);
router.post('/create-order', create);
router.post('/del-order', deleteOrder);
router.post('/del-product', deleteProduct);
router.get('/completed/:userId', showCompleted);
router.get('/:orderId/products', orderProducts);

export default router;
