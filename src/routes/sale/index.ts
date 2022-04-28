import { Router } from 'express';
import {
  createSaleController,
  deleteSaleController,
  getAllSalesController,
  getOneSaleController,
  updateSaleController,
} from '../../controllers';

import {
  authUser,
  validateShape,
  verifyExistingUserCustomer,
  verifyExistingResources,
  verifyExistingSale,
  verifyStock,
} from '../../middlewares';

import { createSaleShape } from '../../shapes';

const salesRouter = Router();

salesRouter.post(
  '/sales',
  authUser,
  validateShape(createSaleShape),
  verifyExistingUserCustomer,
  verifyExistingResources,
  verifyStock,
  createSaleController
);

salesRouter.patch(
  '/sales/:id_sale',
  authUser,
  verifyExistingSale,
  updateSaleController
);

salesRouter.delete(
  '/sales/:id_sale',
  authUser,
  verifyExistingSale,
  deleteSaleController
);

salesRouter.get('/sales', authUser, getAllSalesController);

salesRouter.get(
  '/sales/:id_sale',
  authUser,
  verifyExistingSale,
  getOneSaleController
);

export default salesRouter;
