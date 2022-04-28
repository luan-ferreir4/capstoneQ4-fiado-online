import { Request } from 'express';
import { AdminsRepository, IUpdateAdmin } from '../../repositories';
import { ErrorHandler } from '../../utils';

class UpdateAdminService {
  async execute(req: Request) {
    const { id_admin } = req.admin;

    const updateAdminResult = await new AdminsRepository().updateAdmin(
      id_admin,
      req.validated as IUpdateAdmin
    );

    if (updateAdminResult.affected === 0) {
      throw new ErrorHandler(404, 'Admin not found');
    }

    const updatedAdmin = await new AdminsRepository().getOneAdminById(id_admin);

    return updatedAdmin;
  }
}

export default UpdateAdminService;
