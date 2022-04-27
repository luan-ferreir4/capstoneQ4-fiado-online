import { Router } from 'express';
import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomersController,
  getAllCustomersPerUser,
  getOneCustomerController,
  updateCustomerController,
} from '../../controllers';
import {
  authUser,
  validateShape,
  verifyEmailCustomersMiddleware,
} from '../../middlewares';
import { createCustomerShape, updateCustomerShape } from '../../shapes';

const customerRouter = Router();

customerRouter.post(
  '/create',
  validateShape(createCustomerShape),
  authUser,
  verifyEmailCustomersMiddleware,
  createCustomerController
);
customerRouter.get('/user', authUser, getAllCustomersPerUser);
customerRouter.get('', authUser, getAllCustomersController);
customerRouter.get('/:id_customer', authUser, getOneCustomerController);
customerRouter.patch(
  '/:id_customer',
  validateShape(updateCustomerShape),
  authUser,
  updateCustomerController
);
customerRouter.delete('/:id_customer', authUser, deleteCustomerController);

export default customerRouter;
