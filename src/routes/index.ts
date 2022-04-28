import { Router } from 'express';
import userRouter from './user';
import salesRouter from './sale';
import adminsRouter from './admin';
import resourcesRouter from './resource';
import customerRouter from './customer';
import relatoryRouter from './relatory';

const router = Router();

router.use(
  '/user',
  userRouter,
  customerRouter,
  salesRouter,
  resourcesRouter,
  relatoryRouter
);
router.use('/admin', adminsRouter);

export default router;
