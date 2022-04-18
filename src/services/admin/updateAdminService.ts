import { Request } from 'express';
import { QueryFailedError } from 'typeorm';
import { AdminsRepository } from '../../repositories';
import { ErrorHandler, IDetail } from '../../utils';

class updateAdminService {
  async execute(req: Request) {
    try {
      const { id_admin } = req.admin;

      const updatedAdmin = await new AdminsRepository().updateAdmin(
        id_admin,
        req.validated
      );

      return updatedAdmin;
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

export default updateAdminService;
