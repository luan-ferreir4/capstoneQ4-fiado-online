import { NextFunction, Request, Response } from 'express';

import { DeleteAdminService } from '../../services';
import { ErrorHandler } from '../../utils';

const deleteAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  try {
    const { id_admin } = req.params;
    const { admin } = req;

    if (id_admin !== admin.id_admin) {
      throw new ErrorHandler(401, 'Not authorized');
    }

    const deleteResult = await new DeleteAdminService().execute(admin.id_admin);

    if (deleteResult.affected === 0) {
      throw new ErrorHandler(404, 'Admin not found');
    }

    return res.status(204).json();
  } catch (error) {
    return next(error);
  }
};

export default deleteAdminController;
