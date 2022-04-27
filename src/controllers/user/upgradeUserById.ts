import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

import { UpdateUserService } from '../../services';
import { IDetail, hidePassword } from '../../utils';

const updateUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id_user } = req.params;

    const updatedUser = await new UpdateUserService().execute(
      id_user,
      req.validated
    );

    return res.status(200).json(hidePassword(updatedUser));
  } catch (error) {
    const { detail } = error as IDetail;

    if (error instanceof QueryFailedError) {
      if (detail.includes('already exists') && detail.includes('email')) {
        return res.status(400).json({ message: 'E-mail already registered' });
      }
    }

    return next(error);
  }
};

export default updateUserByIdController;
