import { Router } from 'express';
import {
  createSaleController,
  deleteSaleController,
  getAllSalesController,
  getOneSaleController,
  updateSaleController,
} from '../../controllers';

import { validateShape, verifyExistingSale } from '../../middlewares';

import { createSaleShape } from '../../shapes';

const salesRouter = Router();

salesRouter.post(
  '/sales',
  validateShape(createSaleShape),
  createSaleController
);

salesRouter.patch('/:id_sale/sales', verifyExistingSale, updateSaleController);

salesRouter.delete('/:id_sale/sales', verifyExistingSale, deleteSaleController);

salesRouter.get('/sales', getAllSalesController);

salesRouter.get('/:id_sale/sales', getOneSaleController);

export default salesRouter;
