import { Request, Response } from 'express';
import { Resource } from '../../entities';
import { ResourceRepository } from '../../repositories/resource';

const getOneResourceController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_resource } = req.params;

  const resourceFound: Resource = await new ResourceRepository().getOneResource(
    id_resource
  );

  return res.status(200).json(resourceFound);
};

export default getOneResourceController;
