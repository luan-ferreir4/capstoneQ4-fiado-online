import { NextFunction, Request, Response } from 'express';
import { LoginUserService } from '../../services';

const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  try {
    const { email, password } = req.body;
    const token = await new LoginUserService().execute(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

export default loginUserController;
