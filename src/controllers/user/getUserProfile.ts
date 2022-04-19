import { Request, Response } from 'express';
import { IUser, UserRepository } from '../../repositories';

const getUserProfileController = async (req: Request, res: Response) => {
  const authenticatedUser = req.user;

  const user: IUser = await new UserRepository().getOneUser(
    authenticatedUser.id_user
  );

  return res.status(200).json(user);
};
export default getUserProfileController;
