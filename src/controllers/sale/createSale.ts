import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { ISale } from '../../repositories';
import {
  RegisterResourcesOnSale,
  CreateSaleService,
  UpdateResourcesQuantity,
  SaleValueToBalance,
} from '../../services';

const createSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const saleRequestData: ISale = req.validated;
  const { user } = req;

  const { resources, ...saleData } = saleRequestData;

  const createSaleService = new CreateSaleService();
  const registerResourcesOnSale = new RegisterResourcesOnSale();
  const addSaleValueToBalance = new SaleValueToBalance();
  const updateResourcesQuantity = new UpdateResourcesQuantity();

  const formatedSaleData = await createSaleService.format(
    saleData,
    user.id_user
  );

  const newSale: Sale = await createSaleService.execute(formatedSaleData);

  const formatedResources = await registerResourcesOnSale.format(
    resources,
    newSale.id_sale
  );

  await registerResourcesOnSale.execute(formatedResources);

  await updateResourcesQuantity.execute(formatedResources);

  await addSaleValueToBalance.execute(formatedResources, user);

  return res.status(201).json(newSale);
};

export default createSaleController;
