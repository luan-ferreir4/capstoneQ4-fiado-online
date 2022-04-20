import { Request, Response, NextFunction } from 'express';
import { ResourceRepository } from '../repositories/resource';
import { ErrorHandler } from '../utils';
import { Resource } from '../entities';

const verifyIdResourceExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const { id_resource } = req.params;
  try {
    const resourceList: Resource[] =
      await new ResourceRepository().getAllResourcers();

    const resourceFound: Resource = resourceList.find(
      (resource) => resource.id_resource === id_resource
    );

    if (!resourceFound) {
      throw new ErrorHandler(409, 'Resource not exists!');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyIdResourceExistsMiddleware;
