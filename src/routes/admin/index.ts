import { Router } from 'express';

import {
  getAdminsController,
  registerAdminController,
  loginAdminController,
  updateAdminController,
  deleteAdminController,
  getAdminProfileController,
} from '../../controllers';

import {
  validateShape,
  authAdmin,
  verifyResquestBodyToUpdateMiddleware,
} from '../../middlewares';

import { createAdmin, loginAdmin, updateAdmin } from '../../shapes';

const adminsRouter = Router();

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
  updateAdminController
);

adminsRouter.delete('/:id_admin', authAdmin, deleteAdminController);

export default adminsRouter;
