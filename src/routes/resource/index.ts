import { Router } from 'express';
import { validateShape, authUser } from '../../middlewares';
import { createResourceShape, updatedResourceShape } from '../../shapes';
import {
  createResourceController,
  deleteResourceController,
  getOneResourceController,
  getAllResourcesController,
  updateResourcesController,
} from '../../controllers';

const resourcesRouter = Router();

resourcesRouter.post(
  '/resources',
  authUser,
  validateShape(createResourceShape),
  createResourceController
);
resourcesRouter.get('/resources', authUser, getAllResourcesController);
resourcesRouter.get(
  '/:id_resource/resources',
  authUser,
  getOneResourceController
);
resourcesRouter.patch(
  '/:id_resource/resources',
  authUser,
  validateShape(updatedResourceShape),
  updateResourcesController
);
resourcesRouter.delete(
  '/:id_resource/resources',
  authUser,
  deleteResourceController
);

export default resourcesRouter;
