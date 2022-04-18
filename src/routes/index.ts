import { Router } from 'express';
import userRouter from './user';
import salesRouter from './sale';
import adminsRouter from './admin';

const router = Router();

router.use('/users', userRouter);
router.use('/user', salesRouter);
router.use('/admin', adminsRouter);

export default router;
