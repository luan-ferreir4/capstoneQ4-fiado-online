import { Router } from 'express';
import { validateShape } from '../../middlewares';
import { createResourceShape } from '../../shapes';
import {
  createResourceController,
  deleteResourceController,
  getOneResourceController,
  getAllResourcesController,
} from '../../controllers';

const resourcesRouter = Router();

resourcesRouter.post(
  '/resources',
  validateShape(createResourceShape),
  createResourceController
);
resourcesRouter.get('/resources', getAllResourcesController);
resourcesRouter.get('/:id_resource/resources', getOneResourceController);
resourcesRouter.patch('/:id_resource/resources');
resourcesRouter.delete('/:id_resource/resources', deleteResourceController);

export default resourcesRouter;
