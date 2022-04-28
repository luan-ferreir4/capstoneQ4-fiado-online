import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../../utils';
import { Customer } from '../../entities';

const verifyCustomersEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const { user } = req;
  const { email } = req.body;
  try {
    const userCustomers = user.customers;
    const customer: Customer = userCustomers.find(
      (element) => element.email === email
    );

    if (customer) {
      throw new ErrorHandler(409, 'Customer e-mail already exists!');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyCustomersEmailMiddleware;
