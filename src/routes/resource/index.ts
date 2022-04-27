import { Router } from 'express';
import {
  validateShape,
  authUser,
  verifyExistingResourceMiddleware,
  verifyIdResourceExistsMiddleware,
  verifyResourceOwnerMiddleware,
} from '../../middlewares';
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
  verifyExistingResourceMiddleware,
  createResourceController
);
resourcesRouter.get('/resources', authUser, getAllResourcesController);
resourcesRouter.get(
  '/:id_resource/resources',
  authUser,
  verifyIdResourceExistsMiddleware,
  verifyResourceOwnerMiddleware,
  getOneResourceController
);
resourcesRouter.patch(
  '/:id_resource/resources',
  authUser,
  validateShape(updatedResourceShape),
  verifyIdResourceExistsMiddleware,
  verifyResourceOwnerMiddleware,
  updateResourcesController
);
resourcesRouter.delete(
  '/:id_resource/resources',
  authUser,
  verifyIdResourceExistsMiddleware,
  verifyResourceOwnerMiddleware,
  deleteResourceController
);

export default resourcesRouter;
