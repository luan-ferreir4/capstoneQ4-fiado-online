import { NextFunction, Request, Response } from 'express';
import { LoginAdminService } from '../../services';
import { hidePassword } from '../../utils';

const loginAdminsController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  try {
    const token = await new LoginAdminService().execute(req);

    return res.status(200).json(hidePassword({ token }));
  } catch (error) {
    return next(error);
  }
};

export default loginAdminsController;
