import { AdminsRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

class DeleteAdminService {
  async execute(id_admin: string) {
    const deleteResult = await new AdminsRepository().deleteAdmin(id_admin);

    if (deleteResult.affected === 0) {
      throw new ErrorHandler(404, 'admin not found');
    }

    return deleteResult;
  }
}

export default DeleteAdminService;
