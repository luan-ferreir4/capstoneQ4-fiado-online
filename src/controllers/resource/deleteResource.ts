import { Request, Response } from 'express';
import { ResourceRepository } from '../../repositories/resource';

const deleteResourceController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_resource } = req.params;

  const deleteResource = await new ResourceRepository().deleteResource(
    id_resource
  );
  return res.status(201).json({ message: 'Resource deleted' });
};

export default deleteResourceController;
