import { QueryFailedError } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../utils';
import { UserRepository } from '../repositories';
import { User } from '../entities';

interface IEmailDetail extends QueryFailedError {
  emailDetail: string;
}

const verifyEmailAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const dataBody = req.body;
  try {
    const findEmail: User = await new UserRepository().findUserByEmail(
      dataBody.email
    );

    if (findEmail) {
      throw new ErrorHandler(409, 'Email already exists.');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};
export default verifyEmailAlreadyExists;
