import { ResourceRepository } from '../../repositories/resource';
import { Resource } from '../../entities';

class GetOneResourceService {
  async execute(id_resource: string) {
    const resourceRepository = new ResourceRepository();

    const oneResource: Resource = await resourceRepository.getOneResource(
      id_resource
    );

    return oneResource;
  }
}

export default GetOneResourceService;
