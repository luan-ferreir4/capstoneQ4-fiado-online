import { Router } from 'express';
import { createRelatoryConstroller } from '../../controllers';
import { authUser } from '../../middlewares';

const relatoryRouter = Router();

relatoryRouter.post('/relatory', authUser, createRelatoryConstroller);

export default relatoryRouter;
