import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { SaleRepository } from '../../repositories';

const getAllSalesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const salesList: Sale[] = await new SaleRepository().getAllSales();

  return res.json(200).json(salesList);
};

export default getAllSalesController;
