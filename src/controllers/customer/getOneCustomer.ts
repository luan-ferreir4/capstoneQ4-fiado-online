import { Request, Response } from 'express';
import {
  CustomerRepository,
  ICustomer,
} from '../../repositories/customerRepository';

// eslint-disable-next-line consistent-return
const getOneCustomerController = async (req: Request, res: Response) => {
  try {
    if (req.params.id) {
      const customer: ICustomer = await new CustomerRepository().getOneById(
        req.params.id
      );
      return res.status(200).json(customer);
    }
    if (req.query.email) {
      const customer: ICustomer = await new CustomerRepository().getOneByEmail(
        req.query.email as string
      );
      return res.status(200).json(customer);
    }
  } catch (error) {
    return res.status(400).json({ message: 'Wrong in request' });
  }
};

export default getOneCustomerController;
