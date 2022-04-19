import { Router } from 'express';
import { createUserController, updateUserController } from '../../controllers';
import { validateShape } from '../../middlewares';
import { createUserShape } from '../../shapes';

const userRouter = Router();

userRouter.post(
  '/register',
  validateShape(createUserShape),
  createUserController
);

userRouter.patch('/profile', updateUserController);
export default userRouter;
