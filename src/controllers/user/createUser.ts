import { Request, Response } from 'express';
import { IUser, UserRepository } from '../../repositories';

const createUserController = async (req: Request, res: Response) => {
  const instanceUser = await new UserRepository().createUser(req.validated);
  const user: IUser = await new UserRepository().saveUser(instanceUser);

  return res.status(201).json(user);
};

export default createUserController;
