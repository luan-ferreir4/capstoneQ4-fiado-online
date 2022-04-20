import { Router } from 'express';

import {
  getAdminsController,
  registerAdminController,
  loginAdminController,
  updateAdminController,
  deleteAdminController,
} from '../../controllers';

import { validateShape, authAdmin } from '../../middlewares';

import { createAdmin, loginAdmin, updateAdmin } from '../../shapes';

const adminsRouter = Router();

adminsRouter.get('', authAdmin, getAdminsController);

adminsRouter.post(
  '/register',
  validateShape(createAdmin),
  registerAdminController
);

adminsRouter.post('/login', validateShape(loginAdmin), loginAdminController);

adminsRouter.patch(
  '/:id_admin',
  authAdmin,
  validateShape(updateAdmin),
  updateAdminController
);

adminsRouter.delete('/:id_admin', authAdmin, deleteAdminController);

export default adminsRouter;
