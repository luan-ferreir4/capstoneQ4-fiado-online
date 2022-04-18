import { Request, Response } from 'express';
import { SaleRepository } from '../../repositories';

const deleteSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_sale } = req.params;

  const deleteRes = await new SaleRepository().deleteSale(id_sale);

  return res.json(201).json(deleteRes);
  // await new SaleRepository().deleteSale(id_sale);
  // return res.json(204).json('');
};

export default deleteSaleController;
