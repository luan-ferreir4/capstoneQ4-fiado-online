import { QueryFailedError } from 'typeorm';

import { AdminsRepository, IAdmin } from '../../repositories';
import { ErrorHandler, IDetail } from '../../utils';

class registerAdminService {
  async execute(newAdminData: IAdmin) {
    try {
      const newAdmin = new AdminsRepository().registerAdmin(newAdminData);
      await new AdminsRepository().saveAdmin(newAdmin);

      return newAdmin;
    } catch (error) {
      const { detail } = error as IDetail;

      if (error instanceof QueryFailedError) {
        if (detail.includes('already exists')) {
          throw new ErrorHandler(400, 'E-mail already registered');
        }
      }

      throw new ErrorHandler(400, detail);
    }
  }
}

export default registerAdminService;
