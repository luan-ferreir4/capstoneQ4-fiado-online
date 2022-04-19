import { ResourceRepository } from '../../repositories/resource';
import { Resource } from '../../entities';

class GetAllResourceService {
  async execute(): Promise<Resource[]> {
    const resourceRepository = new ResourceRepository();

    const resourcesList: Resource[] =
      await resourceRepository.getAllResourcers();

    return resourcesList;
  }
}

export default GetAllResourceService;
