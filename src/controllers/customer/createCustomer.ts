import { Request, Response } from 'express';
import { CustomerRepository, ICustomer } from '../../repositories/customer';

const createCustomController = async (req: Request, res: Response) => {
  const customer: ICustomer = await new CustomerRepository().saveCustomer(
    req.validated as ICustomer
  );
  return res.json(201).json(customer);
};

export default createCustomController;
