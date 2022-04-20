import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import bcrypt from 'bcrypt';

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
      throw new ErrorHandler(409, 'not authorizade');
    }

    if ('password' in req.validated) {
      req.validated.password = await bcrypt.hash(req.validated.password, 10);
    }

    const updatedAdmin = await new UpdateAdminService().execute(req);

    return res.status(201).json(hidePassword(updatedAdmin));
  } catch (error) {
    const { detail } = error as IDetail;

    if (error instanceof QueryFailedError) {
      if (detail.includes('already exists')) {
        return res.status(400).json({ message: 'E-mail already registered' });
      }
    }

    return next(error);
  }
};

export default updateAdminController;
