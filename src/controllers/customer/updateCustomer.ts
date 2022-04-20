import { Request, Response } from 'express';
import { UpdateCustomerService } from '../../services';

const updateCustomerController = async (req: Request, res: Response) => {
  const { id_customer } = req.params;

  const customerUpdated = await new UpdateCustomerService().execute(
    id_customer,
    req.validated
  );
  return res.status(201).json(customerUpdated);
};

export default updateCustomerController;
