import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { ISale } from '../../repositories';
import { RegisterResourcesOnSale, CreateSaleService } from '../../services';

const createSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleRequestData: ISale = req.validated;
  const { user } = req;

  const { resources, ...saleData } = saleRequestData;

  const createSaleService = new CreateSaleService();
  const registerResourcesOnSale = new RegisterResourcesOnSale();

  const formatedSaleData = await createSaleService.format(
    saleData,
    user.id_user
  );

  const newSale: Sale = await createSaleService.execute(formatedSaleData);

  console.log(newSale);

  const formatedResources = await registerResourcesOnSale.format(
    resources,
    newSale.id_sale
  );

  console.log(formatedResources);

  await registerResourcesOnSale.execute(formatedResources);

  return res.json(201).json(newSale);
};

export default createSaleController;
