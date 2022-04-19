import { Request, Response } from 'express';
import { Sale } from '../../entities';
import { UpdateSaleService } from '../../services';

const updateSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_sale } = req.params;

  const updatedSale: Sale = await new UpdateSaleService().execute(id_sale);

  return res.status(200).json(updatedSale);

  // return res.json(204).json('');
};

export default updateSaleController;
