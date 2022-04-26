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
    const keys = Object.keys(req.body);

    if (keys.length === 0) {
      throw new ErrorHandler(400, 'empty body request');
    }

    const verifyKeys = (validKeys: string[]) => {
      if (!keys.some((key) => validKeys.some((validKey) => validKey === key))) {
        return res.status(400).json({
          message: 'invalid body request.',
          avaliable_keys: validKeys,
        });
      }

      return next();
    };

    switch (userType) {
      case 'admin':
        return verifyKeys(adminKeys);
      default:
        return next();
    }
  };

export default verifyResquestBodyToUpdateMiddleware;
