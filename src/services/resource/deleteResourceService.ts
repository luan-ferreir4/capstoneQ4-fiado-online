import { ResourceRepository } from '../../repositories/resource';

class DeleteResourceService {
  async execute(id_resource: string): Promise<void> {
    const resourceRepository = new ResourceRepository();

    await resourceRepository.deleteResource(id_resource);
  }
}

export default DeleteResourceService;
