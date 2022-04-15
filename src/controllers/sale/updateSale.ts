import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { SaleRepository } from '../../repositories';

const updateSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { updateSaleData } = req.body;
  const { id_sale } = req.body;

  const updateRes = await new SaleRepository().updateSale(
    id_sale,
    updateSaleData
  );
  console.log(updateRes);
  // await new SaleRepository().updateSale(id_sale, updateSaleData);

  const updatedSale: Sale = await new SaleRepository().getOneSale(id_sale);

  return res.status(200).json(updatedSale);

  // return res.json(204).json('');
};

export default updateSaleController;
