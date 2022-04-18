import { Request } from 'express';
import { QueryFailedError } from 'typeorm';
import { AdminsRepository } from '../../repositories';
import { ErrorHandler, IDetail } from '../../utils';

// eslint-disable-next-line consistent-return
const updateAdminService = async (req: Request) => {
  try {
    const { id_admin } = req.admin;

    const updatedAdmin = await new AdminsRepository().updateAdmin(
      id_admin,
      req.validated
    );

    return updatedAdmin;
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

export default updateAdminService;
