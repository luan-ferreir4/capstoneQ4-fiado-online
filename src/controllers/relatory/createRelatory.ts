import { Request, Response } from 'express';
import { CreateRelatory, SendEmail } from '../../services';
import { relatoryOptionsEmail } from '../../templates';

const createRelatoryController = async (req: Request, res: Response) => {
  const { user } = req;
  new CreateRelatory().execute(user);
  new SendEmail().register(user, relatoryOptionsEmail);
  return res.json({ message: `Relaroty sended ${user.email}` });
};

export default createRelatoryController;
