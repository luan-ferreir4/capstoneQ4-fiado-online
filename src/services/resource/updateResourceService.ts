import { Request } from 'express';
import { Resource } from '../../entities';
import { UserRepository } from '../../repositories';
import { ResourceRepository } from '../../repositories/resource';
import { IUpdateResource } from '../../repositories/resource/interfaces';

class UpdateResourceService {
  async execute(
    id_resource: string,
    resourceValidated: IUpdateResource,
    req: Request
  ): Promise<Resource> {
    const resourceRepository = new ResourceRepository();
    const userRepository = new UserRepository();
    const oneResource: Resource = await resourceRepository.getOneResource(
      id_resource
    );
    const newResource = resourceValidated;

    if (resourceValidated.units && resourceValidated.unit_cost) {
      const newBalance =
        req.user.balance -
        resourceValidated.unit_cost * resourceValidated.units;

      await userRepository.updateUser(req.user.id_user, {
        balance: newBalance,
      });

      newResource.units = resourceValidated.units + oneResource.units;
      await resourceRepository.updateResource(id_resource, newResource);
    }

    if (!resourceValidated.unit_cost && resourceValidated.units) {
      const newBalance =
        req.user.balance - oneResource.unit_cost * resourceValidated.units;

      await userRepository.updateUser(req.user.id_user, {
        balance: newBalance,
      });

      newResource.units = resourceValidated.units + oneResource.units;
      await resourceRepository.updateResource(id_resource, newResource);
    }

    await resourceRepository.updateResource(id_resource, resourceValidated);
    return await resourceRepository.getOneResource(id_resource);
  }
}

export default UpdateResourceService;
