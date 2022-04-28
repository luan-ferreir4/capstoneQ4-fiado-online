import { Request, Response } from 'express';
import { IUser, UserRepository } from '../../repositories';
import { hidePassword } from '../../utils';

const getUserProfileController = async (req: Request, res: Response) => {
  const authenticatedUser = req.user;

  const user: IUser = await new UserRepository().getOneUser(
    authenticatedUser.id_user
  );
  const userWithoutPasswrd = hidePassword(user);
  return res.status(200).json(userWithoutPasswrd);
};
export default getUserProfileController;
