import { Request } from 'express';
import { AdminsRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

const deleteAdminService = async (req: Request) => {
  const { id_admin } = req.params;

  const deleteResult = await new AdminsRepository().deleteAdmin(id_admin);

  if (deleteResult.affected === 0) {
    throw new ErrorHandler(404, 'admin not found');
  }

  return deleteResult;
};

export default deleteAdminService;
