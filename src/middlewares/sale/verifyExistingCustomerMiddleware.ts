import { Request, Response, NextFunction } from 'express';
import { Customer } from '../../entities';
import { CustomerRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

const verifyExistingCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  try {
    const { user } = req;
    const { customer_email } = req.body;

    const customerRepository = new CustomerRepository();

    const userCustomersList: Customer[] =
      await customerRepository.getAllPerUser(user);

    const customerFound = userCustomersList.find(
      (customer) => customer.email === customer_email
    );

    if (!customerFound) {
      throw new ErrorHandler(400, 'Customer not found.');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyExistingCustomer;
