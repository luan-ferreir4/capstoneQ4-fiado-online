import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../../utils';

const verifyExistingUserCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  try {
    const { user } = req;
    const { customer_email } = req.body;

    const userCustomersList = user.customers;

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

export default verifyExistingUserCustomer;
