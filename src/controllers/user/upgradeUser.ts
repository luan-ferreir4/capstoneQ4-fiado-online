import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { UpdateUserService } from '../../services';
import { hidePassword, IDetail } from '../../utils';

const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authenticatedUser = req.user;
    const data = req.validated;

    const updatedUser = await new UpdateUserService().execute(
      authenticatedUser.id_user,
      data
    );

    const returnUpdatedUser = hidePassword(updatedUser);

    return res.status(200).json(returnUpdatedUser);
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
export default updateUserController;
