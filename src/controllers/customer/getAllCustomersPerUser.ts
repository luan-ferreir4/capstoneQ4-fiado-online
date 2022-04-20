import { Request, Response } from 'express';
import { GetAllCustomersPerUserService } from '../../services';

const getAllCustomersPerUser = async (req: Request, res: Response) => {
  const { user } = req;
  const users = await new GetAllCustomersPerUserService().execute(user);
  return res.status(200).json(users);
};

export default getAllCustomersPerUser;
