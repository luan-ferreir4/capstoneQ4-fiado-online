import { Router } from 'express';
import { createUserController } from '../../controllers';
import { validateShape } from '../../middlewares';
import { createUserShape } from '../../shapes';

const userRouter = Router();

userRouter.post(
  '/register',
  validateShape(createUserShape),
  createUserController
);

export default userRouter;
