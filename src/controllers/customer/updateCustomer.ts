import { Request, Response } from 'express';
import { ICustomer } from '../../repositories';
import { UpdateCustomerService } from '../../services';

const updateCustomerController = async (req: Request, res: Response) => {
  const { id_customer } = req.params;

  const customerUpdated: ICustomer = await new UpdateCustomerService().execute(
    id_customer,
    req.validated
  );
  return res.status(201).json(customerUpdated);
};

export default updateCustomerController;
