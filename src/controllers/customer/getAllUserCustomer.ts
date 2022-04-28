import { Request, Response } from 'express';
import { ICustomer } from '../../repositories';
import { GetAllUserCustomerService } from '../../services';

const getAllUserCustomer = async (req: Request, res: Response) => {
  const { user } = req;

  const users: ICustomer[] = await new GetAllUserCustomerService().execute(
    user
  );
  return res.status(200).json(users);
};

export default getAllUserCustomer;
