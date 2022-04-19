import { Request, Response } from 'express';
import { ResourceRepository, IResource } from '../../repositories/resource';

const createResourceController = async (req: Request, res: Response) => {
  const resource: IResource = await new ResourceRepository().saveResource(
    req.validated as IResource
  );
  return res.status(201).json(resource);
};

export default createResourceController;
