import { ResourceRepository, IResource } from '../../repositories/resource';
import { Resource } from '../../entities';
import { UserRepository } from '../../repositories';

class CreateResourceService {
  async execute(
    resourceData: IResource,
    id_user: string,
    req
  ): Promise<Resource> {
    const resourceRepository = new ResourceRepository();
    const userRepository = new UserRepository();
    const { balance } = req.user;
    const newBalance = balance - resourceData.unit_cost * resourceData.units;

    await userRepository.updateUser(id_user, {
      balance: newBalance,
    });

    const newResource: Resource =
      resourceRepository.createResource(resourceData);

    await resourceRepository.saveResource(newResource);
    return newResource;
  }
}

export default CreateResourceService;
