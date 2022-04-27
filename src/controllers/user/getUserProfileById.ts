import { NextFunction, Request, Response } from 'express';

import { UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

const getUserProfileByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id_user } = req.params;

    const user = await new UserRepository().getOneUser(id_user);

    if (!user) {
      throw new ErrorHandler(404, 'User not found');
    }

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

export default getUserProfileByIdController;
