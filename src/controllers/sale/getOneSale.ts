import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { SaleRepository } from '../../repositories';

const getOneSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_sale } = req.params;

  const saleFound: Sale = await new SaleRepository().getOneSale(id_sale);

  return res.json(200).json(saleFound);
};

export default getOneSaleController;
