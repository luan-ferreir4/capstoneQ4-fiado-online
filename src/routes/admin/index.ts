import { Router } from 'express';

const adminsRouter = Router();

adminsRouter.get('');

adminsRouter.post('/register');

adminsRouter.post('/login');

adminsRouter.patch('');

adminsRouter.delete('');

export default adminsRouter;
