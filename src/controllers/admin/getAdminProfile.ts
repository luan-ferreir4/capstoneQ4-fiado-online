import { Request, Response } from 'express';
import { AdminsRepository } from '../../repositories';
import { hidePassword } from '../../utils';

const getAdminProfileController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const admin = await new AdminsRepository().getOneAdminById(
    req.admin.id_admin
  );

  return res.status(200).json(hidePassword(admin));
};

export default getAdminProfileController;
