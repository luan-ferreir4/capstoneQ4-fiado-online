import { Router } from 'express';
import userRouter from './user';
import salesRouter from './salesRoutes';

const router = Router();

router.use('/users', userRouter);
router.use('/user', salesRouter);

export default router;
