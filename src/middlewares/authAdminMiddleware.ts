import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWTConfig } from '../configs';
import { ErrorHandler } from '../utils';

const authAdmin = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<ErrorHandler | any> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new ErrorHandler(401, 'missing header authorization.');
    }

    jwt.verify(token, JWTConfig.secret, (error: any, decoded: any) => {
      if (error) {
        throw new ErrorHandler(401, 'invalid token.');
      }

      req.admin = decoded;
    });

    return next();
  } catch (error) {
    return next(error);
  }
};

export default authAdmin;
