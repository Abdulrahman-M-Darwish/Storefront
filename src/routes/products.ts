import { Router } from 'express';
import { index, show, create } from '../controllers/products';
import requireAuth from '../middleware/requireAuth';

const router = Router();

router.get('/', index);
router.get('/:id', show);
router.post('/create-product', requireAuth, create);

export default router;
