import { QueryFailedError } from 'typeorm';

import { ResourceSale } from '../../entities';
import {
  IResourceRequest,
  IResourceSale,
  ResourceSaleRepository,
} from '../../repositories';
import { ResourceRepository } from '../../repositories/resource';

import { ErrorHandler } from '../../utils';

class RegisterResourcesOnSale {
  async execute(requestData: IResourceRequest[], id_sale: string) {
    try {
      const resourceSaleRepository = new ResourceSaleRepository();

      // const resourceSaleList: Promise<IResourceSale[]> = requestData.map(
      //   async (item) => {
      //     // pega recursos pelo nome que são uma chave unica
      //     const resource = await new ResourceRepository().getResourceByName(
      //       item.resource_name
      //     );
      //     const resourceSaleData: IResourceSale = {
      //       // pega o id_sale após ter a sale criada com o service no controller
      //       id_sale,
      //       // pegar id_sale após ter a criado com o service no controller
      //       id_resource: resource.id_resource,
      //       quantity: item.quantity,
      //     };
      //     return resourceSaleData;
        }
      );

      resourceSaleList.forEach(async (item) => {
        const newSale: ResourceSale = resourceSaleRepository.createSale(item);
        await resourceSaleRepository.saveSale(newSale);
      });
    } catch (error) {
      const { detail } = error;

      if (error instanceof QueryFailedError) {
        throw new ErrorHandler(400, `QueryFailedError:\n${detail}`);
      }

      throw new ErrorHandler(400, detail);
    }
  }
}

export default RegisterResourcesOnSale;
