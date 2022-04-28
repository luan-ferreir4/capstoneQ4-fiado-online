import { Router } from 'express';
import {
  createCustomerController,
  deleteCustomerController,
  getAllUserCustomer,
  getOneCustomerController,
  updateCustomerController,
} from '../../controllers';
import {
  authUser,
  validateShape,
  verifyCustomersEmailMiddleware,
} from '../../middlewares';
import { createCustomerShape, updateCustomerShape } from '../../shapes';

const customerRouter = Router();

customerRouter.post(
  '/customers/create',
  validateShape(createCustomerShape),
  authUser,
  verifyCustomersEmailMiddleware,
  createCustomerController
);

customerRouter.get('/customers/all', authUser, getAllUserCustomer);

customerRouter.get(
  '/customers/:id_customer',
  authUser,
  getOneCustomerController
);

customerRouter.patch(
  '/customers/:id_customer',
  validateShape(updateCustomerShape),
  authUser,
  updateCustomerController
);

customerRouter.delete(
  '/customers/:id_customer',
  authUser,
  deleteCustomerController
);

export default customerRouter;
