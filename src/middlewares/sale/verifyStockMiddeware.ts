/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Request, Response, NextFunction } from 'express';
import { ResourceRepository } from '../../repositories/resource';
import { ErrorHandler } from '../../utils';

const verifyStock = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  try {
    const { resources } = req.body;
    const resourceRepository = new ResourceRepository();

    for (const resourceInsale of resources) {
      const resourceInStock = await resourceRepository.getResourceByName(
        resourceInsale.resource_name
      );
      if (resourceInsale.quantity > 300) {
        throw new ErrorHandler(
          400,
          `Limit of 300 units of a resource per sale`
        );
      } else if (resourceInsale.quantity > resourceInStock.units) {
        throw new ErrorHandler(
          400,
          `Not enough quantity of ${resourceInStock.name} to sale`
        );
      } else if (resourceInsale.quantity <= 0) {
        throw new ErrorHandler(
          400,
          `Invalid quantity of ${resourceInStock.name} to sale`
        );
      } else if (resourceInsale.unit_sold_cost <= 0) {
        throw new ErrorHandler(
          400,
          `Invalid value of unit cost in ${resourceInStock.name} resource`
        );
      }
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyStock;
