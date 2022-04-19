import { Router } from 'express';
import { createUserController, loginUserController } from '../../controllers';

import { validateShape, checkLogin } from '../../middlewares';
import { createUserShape, loginUserShape } from '../../shapes';

const userRouter = Router();

userRouter.post(
  '/register',
  validateShape(createUserShape),
  createUserController
);
userRouter.post(
  '/login',
  validateShape(loginUserShape),
  checkLogin,
  loginUserController
);

userRouter.patch('/profile');
export default userRouter;
