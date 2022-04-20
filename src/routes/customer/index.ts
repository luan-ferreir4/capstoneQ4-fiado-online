import { Router } from 'express';
import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomersController,
  getAllCustomersPerUser,
  updateCustomerController,
} from '../../controllers';
import { authUser, validateShape } from '../../middlewares';
import { createCustomerShape, updateCustomerShape } from '../../shapes';

const customerRouter = Router();

customerRouter.post(
  '/create',
  validateShape(createCustomerShape),
  authUser,
  createCustomerController
);
customerRouter.get('/user', authUser, getAllCustomersPerUser);
customerRouter.get('', authUser, getAllCustomersController);
customerRouter.patch(
  '/:id_customer',
  validateShape(updateCustomerShape),
  authUser,
  updateCustomerController
);
customerRouter.delete('/:id_customer', authUser, deleteCustomerController);

export default customerRouter;
