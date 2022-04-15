import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { SaleRepository, ISale } from '../../repositories';

const createSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleData: ISale = req.body;

  const newSale: Sale = new SaleRepository().createSale(saleData);

  await new SaleRepository().saveSale(newSale);

  return res.json(201).json(newSale);
};

export default createSaleController;
