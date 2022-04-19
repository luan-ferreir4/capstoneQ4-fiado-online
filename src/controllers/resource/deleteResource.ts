import { Request, Response } from 'express';
import { DeleteResourceService } from '../../services';

const deleteResourceController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id_resource } = req.params;

  await new DeleteResourceService().execute(id_resource);

  return res.status(204).json('');
};

export default deleteResourceController;
