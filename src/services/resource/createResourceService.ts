import { ResourceRepository, IResource } from '../../repositories/resource';
import { Resource } from '../../entities';

class CreateResourceService {
  async execute(resourceData: IResource): Promise<Resource> {
    const resourceRepository = new ResourceRepository();

    const newResource: Resource =
      resourceRepository.createResource(resourceData);

    await resourceRepository.saveResource(newResource);
    return newResource;
  }
}

export default CreateResourceService;
