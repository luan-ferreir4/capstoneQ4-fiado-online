import { Request, Response } from 'express';
import { GetOneCustomerService } from '../../services';

const getOneCustomerController = async (req: Request, res: Response) => {
  const { id_customer } = req.params;
  const customer = await new GetOneCustomerService().execute(id_customer);

  return res.status(200).json(customer);
};

export default getOneCustomerController;
