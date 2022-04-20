import { Request, Response } from 'express';
import { CreateCustomerService } from '../../services';

const createCustomController = async (req: Request, res: Response) => {
  const requestCustomerData = req.validated;
  const { user } = req;

  const newCustomer = await new CreateCustomerService().execute(
    requestCustomerData,
    user
  );
  return res.status(201).json(newCustomer);
};

export default createCustomController;
