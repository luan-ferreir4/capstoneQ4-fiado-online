import { Request, Response, NextFunction } from 'express';
import { IResourceRequest } from '../../repositories';
import { ErrorHandler } from '../../utils';

const verifyExistingResources = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  try {
    const { user } = req;
    const { resources } = req.body;
    const userResources = await user.resources;

    resources.forEach((resourceInrequest: IResourceRequest) => {
      const resourceFound = userResources.find(
        (resourceInStock) =>
          resourceInStock.name === resourceInrequest.resource_name
      );
      if (!resourceFound) {
        throw new ErrorHandler(
          400,
          `resource ${resourceInrequest.resource_name} not found.`
        );
      }
    });

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyExistingResources;
