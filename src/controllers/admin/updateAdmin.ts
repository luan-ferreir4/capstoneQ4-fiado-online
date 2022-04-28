import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

import { UpdateAdminService } from '../../services';
import { IDetail, hidePassword, ErrorHandler } from '../../utils';

const updateAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  try {
    const { id_admin } = req.params;
    const { admin } = req;

    if (id_admin !== admin.id_admin) {
      throw new ErrorHandler(409, 'Not authorized');
    }

    const updatedAdmin = await new UpdateAdminService().execute(req);

    return res.status(200).json(hidePassword(updatedAdmin));
  } catch (error) {
    const { detail } = error as IDetail;

    if (error instanceof QueryFailedError) {
      if (detail.includes('already exists')) {
        return res.status(404).json({ message: 'E-mail already registered' });
      }
    }

    return next(error);
  }
};

export default updateAdminController;
