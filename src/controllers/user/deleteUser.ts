import { Request, Response } from 'express';
import { UserRepository } from '../../repositories';

const deleteUserController = async (req: Request, res: Response) => {
  const authenticateUser = req.user;
  await new UserRepository().deleteUser(authenticateUser.id_user);

  return res.status(204).json('');
};
export default deleteUserController;
