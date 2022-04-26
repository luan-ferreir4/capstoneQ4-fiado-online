import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { GetAllSalesService } from '../../services';

const getAllSalesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const salesList: Sale[] = await new GetAllSalesService().execute();

  return res.status(200).json(salesList);
};

export default getAllSalesController;
