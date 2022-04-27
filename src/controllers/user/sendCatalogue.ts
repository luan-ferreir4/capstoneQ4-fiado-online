import { Request, Response } from 'express';
import { SendEmail } from '../../services';
import GenerateCatalogue from '../../services/pdf/catalogue';
import { catalogueOptionEmail } from '../../templates';

const sendCatalogueByEmailController = async (req: Request, res: Response) => {
  const { user } = req;
  const sendTo = req.body;
  new GenerateCatalogue().execute(user, sendTo);
  new SendEmail().register(sendTo, catalogueOptionEmail);
  return res.status(200).json({ messege: `Catalogue sended ${sendTo.email}` });
};
export default sendCatalogueByEmailController;
