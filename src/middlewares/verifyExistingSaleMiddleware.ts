import { Request, Response, NextFunction } from 'express';
import { Sale } from '../entities';
import { SaleRepository } from '../repositories';
import { ErrorHandler } from '../utils';

const verifyExistingSale = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const { id_sale } = req.params;
  try {
    const salesList: Sale[] = await new SaleRepository().getAllSales();

    const saleFound: Sale = salesList.find((sale) => sale.id_sale === id_sale);

    if (!saleFound) {
      throw new ErrorHandler(404, 'Sale do not exists.');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyExistingSale;
