import { Request } from 'express';
import { AdminsRepository, IUpdateAdmin } from '../../repositories';

class UpdateAdminService {
  async execute(req: Request) {
    const { id_admin } = req.admin;

    await new AdminsRepository().updateAdmin(
      id_admin,
      req.validated as IUpdateAdmin
    );

    const updatedAdmin = await new AdminsRepository().getOneAdminById(id_admin);

    return updatedAdmin;
  }
}

export default UpdateAdminService;
