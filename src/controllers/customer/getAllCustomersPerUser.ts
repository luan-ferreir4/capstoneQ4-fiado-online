import { Request, Response } from 'express';
import { ICustomer } from '../../repositories';
import { GetAllCustomersPerUserService } from '../../services';

const getAllCustomersPerUser = async (req: Request, res: Response) => {
  const { user } = req;
  const users: ICustomer[] = await new GetAllCustomersPerUserService().execute(
    user
  );
  return res.status(200).json(users);
};

export default getAllCustomersPerUser;
