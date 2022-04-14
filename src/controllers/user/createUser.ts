import { Request, Response } from 'express';
import { User } from '../../entities';
import { IUser, UserRepository } from '../../repositories';

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const test = req.body;

  console.log(req.body);

  // const user: IUser = await new UserRepository().saveUser(
  //   req.validated as IUser
  // );

  return res.status(201).json(test);
};

export default createUserController;
