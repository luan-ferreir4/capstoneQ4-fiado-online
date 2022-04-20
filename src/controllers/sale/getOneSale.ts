import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { GetOneSaleService } from '../../services';

const getOneSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_sale } = req.params;

  const saleFound: Sale = await new GetOneSaleService().execute(id_sale);

  return res.json(200).json(saleFound);
};

export default getOneSaleController;
