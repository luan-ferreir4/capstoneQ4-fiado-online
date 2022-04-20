import { Request, Response } from 'express';
import { CreateResourceService, FormatResourceService } from '../../services';
import { Resource } from '../../entities';
import { IResource } from '../../repositories/resource';

const createResourceController = async (req: Request, res: Response) => {
  const resourceData: IResource = req.validated;
  const { id_user } = req.user;

  const formatedResource: IResource = await new FormatResourceService().execute(
    resourceData,
    id_user
  );

  const resource: Resource = await new CreateResourceService().execute(
    formatedResource
  );

  return res.status(201).json(resource);
};

export default createResourceController;
