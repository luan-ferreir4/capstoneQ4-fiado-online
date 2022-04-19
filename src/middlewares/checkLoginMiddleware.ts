import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { ErrorHandler } from '../utils';
import { UserRepository } from '../repositories';

const checkLogin = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email, password } = req.body;
  try {
    const foundUser = await new UserRepository().findUserByEmail(email);
    if (!foundUser) {
      throw new ErrorHandler(401, 'Wrong email/password');
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      throw new ErrorHandler(401, 'Wrong email/password');
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

export default checkLogin;
