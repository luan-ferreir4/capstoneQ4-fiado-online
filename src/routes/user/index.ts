import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  getUserProfileController,
  loginUserController,
  sendCatalogueByEmailController,
  updateUserController,
} from '../../controllers';

import {
  validateShape,
  checkLogin,
  authUser,
  verifyEmailAlreadyExists,
} from '../../middlewares';
import {
  createUserShape,
  loginUserShape,
  sendCatalogueShape,
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

userRouter.get('/profile', authUser, getUserProfileController);

userRouter.patch(
  '/profile',
  validateShape(upgradeUserShape),
  verifyEmailAlreadyExists,
  authUser,
  updateUserController
);

userRouter.delete('/profile', authUser, deleteUserController);

userRouter.post(
  '/catalogue',
  validateShape(sendCatalogueShape),
  authUser,
  sendCatalogueByEmailController
);
export default userRouter;
