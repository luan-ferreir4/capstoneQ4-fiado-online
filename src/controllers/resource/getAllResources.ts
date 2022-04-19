import { Request, Response } from 'express';
import { Resource } from '../../entities';
import { ResourceRepository } from '../../repositories/resource';

const getAllResourcesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const resourceList: Resource[] =
    await new ResourceRepository().getAllResourcers();

  return res.status(200).json(resourceList);
};

export default getAllResourcesController;
