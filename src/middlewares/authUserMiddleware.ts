import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWTConfig } from '../configs';
import { User } from '../entities';
import { UserRepository } from '../repositories';
import { ErrorHandler } from '../utils';

const authUser = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<ErrorHandler | void> => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    if (!token) {
      throw new ErrorHandler(401, 'missing header authorization.');
    }

    const usersList: User[] = await new UserRepository().getAllUsers();

    jwt.verify(token, JWTConfig.secret, (error: any, decoded: any): void => {
      if (error) {
        throw new ErrorHandler(401, 'invalid token.');
      }
      const foundUser = usersList.find(
        (user: User) => user.cpf === decoded.cpf
      );

      req.user = foundUser;
    });

    return next();
  } catch (error) {
    return next(error);
  }
};

export default authUser;
