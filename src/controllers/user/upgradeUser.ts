import { Request, Response } from 'express';
import { User } from '../../entities';
import { IUser, UserRepository } from '../../repositories';
import { hidePassword, verifyAcceptedKeys } from '../../utils';

const updateUserController = async (req: Request, res: Response) => {
  const authenticatedUser = req.user;
  const data = req.validated;

  const newData = verifyAcceptedKeys(data);

  await new UserRepository().updateUser(authenticatedUser.id_user, newData);

  const getUser: IUser = await new UserRepository().getOneUser(
    authenticatedUser.id_user
  );

  const returnUpdatedUser = hidePassword(getUser);

  return res.status(200).json(returnUpdatedUser);
};
export default updateUserController;
