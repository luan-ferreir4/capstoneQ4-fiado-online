import { ResourceRepository } from '../../repositories/resource';
import { IUpdateResource } from '../../repositories/resource/interfaces';

class UpdateResourceService {
  async execute(
    id_resource: string,
    resourceValidated: IUpdateResource
  ): Promise<IUpdateResource> {
    const resourceRepository = new ResourceRepository();

    const resourceUpdated: any = resourceRepository.updateResource(
      id_resource,
      resourceValidated
    );

    return resourceUpdated;
  }
}

export default UpdateResourceService;
