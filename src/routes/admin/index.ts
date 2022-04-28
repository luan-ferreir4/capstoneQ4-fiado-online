import { Router } from 'express';

import {
  getAdminsController,
  registerAdminController,
  loginAdminController,
  updateAdminController,
  deleteAdminController,
  getAdminProfileController,
  updateUserByIdController,
  getAllUsersController,
  deleteUserByIdController,
} from '../../controllers';

import getUserProfileByIdController from '../../controllers/user/getUserProfileById';

import {
  validateShape,
  authAdmin,
  verifyResquestBodyToUpdateMiddleware,
  validateUuidMiddleware,
} from '../../middlewares';

import {
  createAdmin,
  loginAdmin,
  updateAdmin,
  upgradeUserShape,
} from '../../shapes';

const adminsRouter = Router();

//  Admin Routes

adminsRouter.get('', authAdmin, getAdminsController);

adminsRouter.get('/profile', authAdmin, getAdminProfileController);

adminsRouter.post(
  '/register',
  validateShape(createAdmin),
  registerAdminController
);

adminsRouter.post('/login', validateShape(loginAdmin), loginAdminController);

adminsRouter.patch(
  '/:id_admin',
  authAdmin,
  verifyResquestBodyToUpdateMiddleware(),
  validateShape(updateAdmin),
  validateUuidMiddleware,
  updateAdminController
);

adminsRouter.delete(
  '/:id_admin',
  authAdmin,
  validateUuidMiddleware,
  deleteAdminController
);

//  Admin Routes

//  Admin User Routes

adminsRouter.get('/user/all', authAdmin, getAllUsersController);

adminsRouter.get(
  '/user/:id_user',
  authAdmin,
  validateUuidMiddleware,
  getUserProfileByIdController
);

adminsRouter.patch(
  '/user/:id_user',
  authAdmin,
  verifyResquestBodyToUpdateMiddleware('user'),
  validateShape(upgradeUserShape),
  validateUuidMiddleware,
  updateUserByIdController
);

adminsRouter.delete(
  '/user/:id_user',
  authAdmin,
  validateUuidMiddleware,
  deleteUserByIdController
);

//  Admin User Routes

export default adminsRouter;
