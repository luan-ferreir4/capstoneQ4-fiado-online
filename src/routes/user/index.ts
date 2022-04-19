import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  loginUserController,
  updateUserController,
} from '../../controllers';

import { validateShape, checkLogin, authUser } from '../../middlewares';
import {
  createUserShape,
  loginUserShape,
  upgradeUserShape,
} from '../../shapes';

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

userRouter.patch(
  '/profile',
  validateShape(upgradeUserShape),
  authUser,
  updateUserController
);

userRouter.delete('/profile', authUser, deleteUserController);
export default userRouter;
