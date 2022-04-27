import { Request, Response } from 'express';
import { UserRepository } from '../../repositories';

const getUserProfileByIdController = async (req: Request, res: Response) => {
  const { id_user } = req.params;

  const user = await new UserRepository().getOneUser(id_user);

  return res.status(200).json(user);
};

export default getUserProfileByIdController;
