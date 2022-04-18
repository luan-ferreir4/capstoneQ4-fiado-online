import { Request, Response } from 'express';
import { createUserService } from '../../services/user';

import { handleErrors } from '../../utils';

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.validated);
    return res.status(201).json(user);
  } catch (error: any) {
    return handleErrors(error, res);
  }
};

export default createUserController;
