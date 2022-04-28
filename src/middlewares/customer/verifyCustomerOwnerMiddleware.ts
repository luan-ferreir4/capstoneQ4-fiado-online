import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../../utils';
import { Customer } from '../../entities';

const verifyCustomerOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  try {
    const { id_customer } = req.params;
    const { user } = req;

    const userCustomers = user.customers;

    const customer: Customer = userCustomers.find(
      (element) => element.id_customers === id_customer
    );

    if (!customer) {
      throw new ErrorHandler(
        403,
        'User does not have permissions to access this customer!'
      );
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyCustomerOwner;
