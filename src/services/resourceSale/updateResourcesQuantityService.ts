/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { ResourceRepository } from '../../repositories/resource';
import { IResourceSale } from '../../repositories';

class UpdateResourcesQuantity {
  async execute(formatedList: IResourceSale[]) {
    const resourceRepository = new ResourceRepository();

    for (const resourceSale of formatedList) {
      const resourceId: any = resourceSale.resource;
      const resourceInStock = await resourceRepository.getOneResource(
        resourceId
      );
      const newUnits = resourceInStock.units - resourceSale.quantity;
      await resourceRepository.updateResource(resourceId, { units: newUnits });
    }
  }
}

export default UpdateResourcesQuantity;
