import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  getUserProfileController,
  loginUserController,
  sendCatalogueByEmailController,
  updateUserController,
  updateUserByIdController,
  getAllUsersController,
  deleteUserByIdController,
} from '../../controllers';
import getUserProfileByIdController from '../../controllers/user/getUserProfileById';

import {
  validateShape,
  checkLogin,
  authUser,
  verifyResquestBodyToUpdateMiddleware,
  authAdmin,
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
  authUser,
  verifyResquestBodyToUpdateMiddleware('user'),
  validateShape(upgradeUserShape),
  updateUserController
);

userRouter.delete('/profile', authUser, deleteUserController);

userRouter.post(
  '/catalogue',
  validateShape(sendCatalogueShape),
  authUser,
  sendCatalogueByEmailController
);
userRouter.get('', authAdmin, getAllUsersController);

userRouter.get('/:id_user', authAdmin, getUserProfileByIdController);

userRouter.patch(
  '/:id_user',
  authAdmin,
  verifyResquestBodyToUpdateMiddleware('user'),
  validateShape(upgradeUserShape),
  updateUserByIdController
);

userRouter.delete('/:id_user', authAdmin, deleteUserByIdController);

export default userRouter;
