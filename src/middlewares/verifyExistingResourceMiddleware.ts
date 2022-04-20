import { Request, Response, NextFunction } from 'express';
import { ResourceRepository } from '../repositories/resource';
import { ErrorHandler } from '../utils';
import { Resource } from '../entities';

const verifyExistingResourceMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const { name } = req.params;
  try {
    const resourceList: Resource[] =
      await new ResourceRepository().getAllResourcers();

    const resourceFound: Resource = resourceList.find(
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
