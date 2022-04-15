import { Request, Response } from 'express';
import {
  CustomerRepository,
  ICustomer,
} from '../../repositories/customerRepository';

const updateCustomerController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer: ICustomer = await new CustomerRepository().getOneById(id);
  await new CustomerRepository().updateCustomer(
    customer.id_customers,
    req.validated as ICustomer
  );
  const updatedCustomer: ICustomer = await new CustomerRepository().getOneById(
    customer.id_customers
  );
  return res.status(201).json(updatedCustomer);
};

export default updateCustomerController;
