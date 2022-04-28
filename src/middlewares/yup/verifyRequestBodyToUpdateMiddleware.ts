import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../../utils';

const verifyResquestBodyToUpdateMiddleware =
  (userType: string = '') =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Response | ErrorHandler | NextFunction => {
    const adminKeys = ['name', 'email', 'password'];
    const customerKeys = ['name', 'email', 'phone_number'];
    const userKeys = [
      'name',
      'email',
      'password',
      'balance',
      'weekly_report_day',
      'monthly_report_day',
    ];

    const keys = Object.keys(req.body);

    const verifyKeys = (validKeys: string[]) => {
      if (!keys.some((key) => validKeys.some((validKey) => validKey === key))) {
        return res.status(400).json({
          message: 'At least one change is necessary',
          avaliable_keys: validKeys,
        });
      }

      return next();
    };

    switch (userType) {
      case 'user':
        return verifyKeys(userKeys);
      case 'admin':
        return verifyKeys(adminKeys);
      case 'customer':
        return verifyKeys(customerKeys);
      default:
        return next();
    }
  };

export default verifyResquestBodyToUpdateMiddleware;
