import { Router } from 'express';

const resourcesRouter = Router();

resourcesRouter.post('/resources');
resourcesRouter.get('/resources');
resourcesRouter.get('/:id_resource/resources');
resourcesRouter.patch('/:id_resource/resources');
resourcesRouter.delete('/:id_resource/resources');

export default resourcesRouter;
