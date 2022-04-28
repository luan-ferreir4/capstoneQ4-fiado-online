import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../../utils';
import { Resource } from '../../entities';
import { ResourceRepository } from '../../repositories';

const verifyIdResourceExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  try {
    const { id_resource } = req.params;

    const resourceFound: Resource =
      await new ResourceRepository().getOneResource(id_resource);

    if (!resourceFound) {
      throw new ErrorHandler(409, 'Resource do not exists!');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyIdResourceExistsMiddleware;
