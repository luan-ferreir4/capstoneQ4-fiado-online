import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { GetAllUserSalesService } from '../../services';

const getAllSalesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = req;

  const salesList: Sale[] = await new GetAllUserSalesService().execute(user);

  return res.status(200).json(salesList);
};

export default getAllSalesController;
