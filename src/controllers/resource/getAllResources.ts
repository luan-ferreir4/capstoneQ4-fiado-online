import { Request, Response } from 'express';
import { Resource } from '../../entities';
import { GetAllResourceService } from '../../services';

const getAllResourcesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const resourceList: Resource[] = await new GetAllResourceService().execute();

  return res.status(200).json(resourceList);
};

export default getAllResourcesController;
