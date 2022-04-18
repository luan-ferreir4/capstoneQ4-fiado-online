import { Request, Response } from 'express';
import { User } from '../../entities';
import { IUser, UserRepository } from '../../repositories';

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(201).json('');
};

export default createUserController;
