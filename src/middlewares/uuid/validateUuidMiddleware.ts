import { NextFunction, Request, Response } from 'express';
import { validate as validateUuid } from 'uuid';
import { ErrorHandler } from '../../utils';

const validateUuidMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { params } = req;

    const paramsKeys = Object.keys(params);

    paramsKeys.forEach((param) => {
      if (param.includes('id_')) {
        if (!validateUuid(params[param])) {
          const name = param.replace('id_', '');
          throw new ErrorHandler(404, `${name} not found`);
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

export default validateUuidMiddleware;
