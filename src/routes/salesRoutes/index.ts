import { Router } from 'express';
import {
  createSaleController,
  deleteSaleController,
  getAllSalesController,
  getOneSaleController,
  updateSaleController,
} from '../../controllers';
// import { validateShape } from '../../middlewares';

const salesRouter = Router();

salesRouter.post(
  '/sales',
  //   validateShape(),
  createSaleController
);

salesRouter.patch('/:id_sale/sales', updateSaleController);

salesRouter.delete('/:id_sale/sales', deleteSaleController);

salesRouter.get('/sales', getAllSalesController);

salesRouter.get('/:id_sale/sales', getOneSaleController);

export default salesRouter;
