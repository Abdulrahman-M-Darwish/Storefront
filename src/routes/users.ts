import { Router } from 'express';
import { index, show, create } from '../controllers/users';
import requireAuth from '../middleware/requireAuth';

const router = Router();

router.get('/', requireAuth, index);
router.get('/:id', requireAuth, show);
router.post('/create-user', create);

export default router;
