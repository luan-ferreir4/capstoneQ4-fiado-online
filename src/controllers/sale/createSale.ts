import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { ICreateSaleRequest, ISale } from '../../repositories';
import { CreateSaleService, FormatSaleService } from '../../services';

const createSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleRequestData: ICreateSaleRequest = req.validated;
  const { user } = req;

  const { resources, ...saleData } = saleRequestData;

  // await new RegisterResourcesOnSale().execute(resources);

  const newSaleData: ISale = await new FormatSaleService().execute(
    saleData,
    user.id_user
  );

  const newSale: Sale = await new CreateSaleService().execute(newSaleData);

  return res.json(201).json(newSale);
};

export default createSaleController;
