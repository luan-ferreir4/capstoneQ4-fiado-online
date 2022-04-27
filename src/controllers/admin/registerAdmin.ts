import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

import { RegisterAdminService } from '../../services';
import { IDetail, hidePassword } from '../../utils';

const registerAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  try {
    const newAdmin = await new RegisterAdminService().execute(req.validated);

    return res.status(201).json(hidePassword(newAdmin));
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

export default registerAdminController;
