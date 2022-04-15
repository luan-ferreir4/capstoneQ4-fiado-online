import { Request, Response } from 'express';
import { CustomerRepository } from '../../repositories/customerRepository';

const deleteCustomerController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await new CustomerRepository().deleteCustomer(id);
    return res.status(200).json({ message: 'Customer delete with success' });
  } catch (error) {
    return res.status(400).json({ message: 'Wrong in request' });
  }
};

export default deleteCustomerController;
