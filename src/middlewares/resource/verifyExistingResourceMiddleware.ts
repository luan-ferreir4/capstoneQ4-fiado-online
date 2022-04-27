import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../../utils';
import { Resource } from '../../entities';

const verifyExistingResourceMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const { name } = req.validated;
  const { resources } = req.user;
  try {
    const resourceFound: Resource = resources.find(
      (resource) => resource.name === name
    );

    if (resourceFound) {
      throw new ErrorHandler(409, 'Resource already exists!');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyExistingResourceMiddleware;
