import { Request, Response } from 'express';
import { LoginUserService } from '../../services';

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;
  const token = await new LoginUserService().execute(email);
  return res.status(200).json({ token });
};

export default loginUserController;
