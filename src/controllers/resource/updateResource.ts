import { Request, Response } from 'express';
import { UpdateResourceService } from '../../services';

const updateResourcesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const resourceValidated = req.validated;
  const { id_resource } = req.params;
  const { user } = req;

  const resourceUpdated = await new UpdateResourceService().execute(
    id_resource,
    resourceValidated,
    req
  );

  return res.status(200).json(resourceUpdated);
};

export default updateResourcesController;
