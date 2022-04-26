import { Router } from 'express';
import { createRelatoryController } from '../../controllers';
import { authUser } from '../../middlewares';

const relatoryRouter = Router();

relatoryRouter.post('/relatory', authUser, createRelatoryController);

export default relatoryRouter;
