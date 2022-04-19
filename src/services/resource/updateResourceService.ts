import { Resource } from '../../entities';
import { ResourceRepository } from '../../repositories/resource';
import { IUpdateResource } from '../../repositories/resource/interfaces';

class UpdateResourceService {
  async execute(
    id_resource: string,
    resourceValidated: IUpdateResource
  ): Promise<Resource> {
    const resourceRepository = new ResourceRepository();

    await resourceRepository.updateResource(id_resource, resourceValidated);

    const oneResource: Resource = await resourceRepository.getOneResource(
      id_resource
    );

    return oneResource;
  }
}

export default UpdateResourceService;
