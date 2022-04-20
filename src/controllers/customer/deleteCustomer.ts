import { Request, Response } from 'express';
import { DeleteCustomerService } from '../../services';

const deleteCustomerController = async (req: Request, res: Response) => {
  const { id_customer } = req.params;
  await new DeleteCustomerService().execute(id_customer);
  return res.status(204).json('');
};

export default deleteCustomerController;
