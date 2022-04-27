import { Request } from 'express';
import { Resource } from '../../entities';

class GetAllResourceService {
  async execute(req: Request): Promise<Resource[]> {
    return req.user.resources;
  }
}

export default GetAllResourceService;
