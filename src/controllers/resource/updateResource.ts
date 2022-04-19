import { Request, Response } from 'express';
import { Resource } from '../../entities';
import { ResourceRepository } from '../../repositories/resource';

const updateResourcesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { updateResourcesData } = req.body;
  const { id_Resource } = req.body;

  await new ResourceRepository().updateResource(
    id_Resource,
    updateResourcesData
  );

  const updatedResources: Resource =
    await new ResourceRepository().getOneResource(id_Resource);

  return res.status(200).json(updatedResources);
};

export default updateResourcesController;
