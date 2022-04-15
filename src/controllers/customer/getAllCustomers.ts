import { Request, Response } from 'express';
import {
  CustomerRepository,
  ICustomer,
} from '../../repositories/customerRepository';

const getAllCustomersController = async (req: Request, res: Response) => {
  try {
    const customers: ICustomer[] =
      await new CustomerRepository().getAllCustomers();
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(400).json({ message: 'Wrong in request' });
  }
};

export default getAllCustomersController;
