import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { createUserService } from '../../services';

import { IDetail } from '../../utils';

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUserService(req.validated);
    return res.status(201).json(user);
  } catch (error: any) {
    const { detail } = error as IDetail;

    if (error instanceof QueryFailedError) {
      if (detail.includes('already exists') && detail.includes('email')) {
        return res.status(400).json({ message: 'E-mail already registered' });
      }
      if (detail.includes('already exists') && detail.includes('cpf')) {
        return res.status(400).json({ message: 'CPF already registered' });
      }
    }

    return next(error);
  }
};

export default createUserController;
