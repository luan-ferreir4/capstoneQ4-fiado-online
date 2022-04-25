import { Request, Response } from 'express';
import { SendEmail } from '../../services';
import { relatoryOptionsEmail } from '../../templates';

const createRelatoryConstroller = async (req: Request, res: Response) => {
  const { user } = req;
  new SendEmail().register(user, relatoryOptionsEmail);
  return res.json({ message: 'Relaroty sended per email' });
};

export default createRelatoryConstroller;
