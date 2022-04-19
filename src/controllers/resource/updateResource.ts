import { Request, Response } from 'express';
import { UpdateResourceService } from '../../services';

const updateResourcesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const resourceValidated = req.validated;
  const { id_resource } = req.params;

  await new UpdateResourceService().execute(id_resource, resourceValidated);

  return res.status(200).json({ id_resource, ...resourceValidated });
};

export default updateResourcesController;
