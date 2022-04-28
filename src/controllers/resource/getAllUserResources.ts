import { Request, Response } from 'express';
import { Resource } from '../../entities';
import { GetAllUserResourceService } from '../../services';

const getAllUserResourcesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = req;
  const resourceList: Resource[] =
    await new GetAllUserResourceService().execute(user);

  return res.status(200).json(resourceList);
};

export default getAllUserResourcesController;
