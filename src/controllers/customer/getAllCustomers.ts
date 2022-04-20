import { Request, Response } from 'express';
import { GetAllCustomersService } from '../../services';

const getAllCustomersController = async (req: Request, res: Response) => {
  const customers = await new GetAllCustomersService().execute();
  return res.status(200).json(customers);
};

export default getAllCustomersController;
