import { Router } from 'express';
import userRouter from './user';
import salesRouter from './sale';
import adminsRouter from './admin';
import resourcesRouter from './resource';
import customerRouter from './customer';

const router = Router();

router.use('/users', userRouter);
router.use('/user', salesRouter, resourcesRouter);
router.use('/admin', adminsRouter);
router.use('/customer', customerRouter);

export default router;
