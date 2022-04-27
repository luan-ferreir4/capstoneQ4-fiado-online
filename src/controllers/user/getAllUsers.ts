import { Request, Response } from 'express';
import { UserRepository } from '../../repositories';

const getAllUsersController = async (req: Request, res: Response) => {
  const users = await new UserRepository().getAllUsers();

  return res.status(200).json(users);
};

export default getAllUsersController;
