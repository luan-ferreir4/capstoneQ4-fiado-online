import { NextFunction, Request, Response } from 'express';
import { DeleteUserService } from '../../services';

const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authenticateUser = req.user;

    await new DeleteUserService().execute(authenticateUser.id_user);

    return res.status(204).json('');
  } catch (error) {
    return next(error);
  }
};
export default deleteUserController;
