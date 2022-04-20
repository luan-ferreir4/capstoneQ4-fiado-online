import { Request, Response } from 'express';
import { ICustomer } from '../../repositories';
import { CreateCustomerService } from '../../services';

const createCustomController = async (req: Request, res: Response) => {
  const requestCustomerData: ICustomer = req.validated;
  const { user } = req;

  const newCustomer: ICustomer = await new CreateCustomerService().execute(
    requestCustomerData,
    user
  );
  return res.status(201).json(newCustomer);
};

export default createCustomController;
