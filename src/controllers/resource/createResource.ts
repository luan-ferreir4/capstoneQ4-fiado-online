import { Request, Response } from 'express';
import CreateResourceService from '../../services/resource/createResourceService';
import { Resource } from '../../entities';

const createResourceController = async (req: Request, res: Response) => {
  const resource: Resource = await new CreateResourceService().execute(
    req.validated
  );
  return res.status(201).json(resource);
};

export default createResourceController;
