import { NextFunction, Request, Response } from 'express';
import { DeleteUserService } from '../../services';

const deleteUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id_user } = req.params;

    await new DeleteUserService().execute(id_user);

    return res.status(204).json('');
  } catch (error) {
    return next(error);
  }
};

export default deleteUserByIdController;
