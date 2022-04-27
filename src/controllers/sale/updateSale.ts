import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { SaleValueToBalance, UpdateSaleService } from '../../services';

const updateSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_sale } = req.params;
  const { user } = req;

  const updatedSale: Sale = await new UpdateSaleService().execute(id_sale);

  const resourceSales = await updatedSale.resources_sales;

  await new SaleValueToBalance().execute(resourceSales, user);

  return res.status(200).json({ message: 'Sale updated successfully!' });
};

export default updateSaleController;
