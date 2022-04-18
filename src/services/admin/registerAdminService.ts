import { QueryFailedError } from 'typeorm';

import { AdminsRepository, IAdmin } from '../../repositories';
import { ErrorHandler, IDetail } from '../../utils';

// eslint-disable-next-line consistent-return
const registerAdminService = async (newAdminData: IAdmin) => {
  try {
    const newAdmin = new AdminsRepository().registerAdmin(newAdminData);
    await new AdminsRepository().saveAdmin(newAdmin);

    return newAdmin;
  } catch (error) {
    if (error instanceof QueryFailedError) {
      const { detail } = error as IDetail;

      if (detail.includes('already exists')) {
        throw new ErrorHandler(400, 'E-mail already registered');
      }

      throw new ErrorHandler(400, detail);
    }
  }
};

export default registerAdminService;
