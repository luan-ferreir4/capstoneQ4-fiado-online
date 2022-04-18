import { Request, Response } from 'express';
import { User } from '../../entities';
import { UserRepository } from '../../repositories';

const deleteUserController = async(req: Request, res: Response) => {
  const authenticateUser = req.user;
  await new UserRepository().deleteUser(authenticateUser['user'].id);

  return res.status(204).json('');
};
export default deleteUserController;
