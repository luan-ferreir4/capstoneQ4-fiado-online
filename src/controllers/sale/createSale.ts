import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { ISale } from '../../repositories';
import {
  RegisterResourcesOnSale,
  CreateSaleService,
  FormatSaleService,
} from '../../services';

const createSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleRequestData: ISale = req.validated;
  const { user } = req;

  const { resources, ...saleData } = saleRequestData;

  const newSaleData: ISale = await new FormatSaleService().execute(
    saleData,
    user.id_user
  );

  const newSale: Sale = await new CreateSaleService().execute(newSaleData);

  await new RegisterResourcesOnSale().execute(resources, newSale.id_sale);

  return res.json(201).json(newSale);
};

export default createSaleController;
