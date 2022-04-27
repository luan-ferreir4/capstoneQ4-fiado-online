import { Request, Response, NextFunction } from 'express';
import { ResourceRepository } from '../../repositories/resource';
import { ErrorHandler } from '../../utils';
import { Resource } from '../../entities';

const verifyResourceOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const { id_resource } = req.params;
  const { resources } = req.user;

  try {
    const resource: Resource = resources.find(
      (element) => element.id_resource === id_resource
    );

    if (!resource) {
      throw new ErrorHandler(
        403,
        'User does not have permissions to access this resource!'
      );
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyResourceOwnerMiddleware;
