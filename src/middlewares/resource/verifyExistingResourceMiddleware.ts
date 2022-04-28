import { Request, Response, NextFunction } from 'express';
import { ErrorHandler, regulateNames } from '../../utils';
import { Resource } from '../../entities';

const verifyExistingResourceMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const { resource_name } = req.validated;
  const { user } = req;
  try {
    const name = regulateNames(resource_name);

    const userResourcesList = await user.resources;

    const resourceFound: Resource = userResourcesList.find(
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
