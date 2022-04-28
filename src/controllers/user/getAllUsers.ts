import { Request, Response } from 'express';
import { UserRepository } from '../../repositories';
import { hidePassword } from '../../utils';

const getAllUsersController = async (req: Request, res: Response) => {
  const users = await new UserRepository().getAllUsers();
  const usersWithoutPasswrd = hidePassword(users);
  return res.status(200).json(usersWithoutPasswrd);
};

export default getAllUsersController;
