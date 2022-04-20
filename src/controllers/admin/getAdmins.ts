import { Request, Response } from 'express';
import { AdminsRepository } from '../../repositories';
import { hidePassword } from '../../utils';

const getAdminsController = async (
  _: Request,
  res: Response
): Promise<Response> => {
  const admins = await new AdminsRepository().getAllAdmin();

  return res.status(200).json(hidePassword(admins));
};

export default getAdminsController;
