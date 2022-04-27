import { Request, Response } from 'express';
import { DeleteSaleService } from '../../services';

const deleteSaleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_sale } = req.params;

  await new DeleteSaleService().execute(id_sale);

  return res.status(204).json('');
};

export default deleteSaleController;
