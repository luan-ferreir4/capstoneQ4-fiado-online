/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { ResourceSale } from '../../entities';
import {
  IResourceRequest,
  IResourceSale,
  ResourceSaleRepository,
} from '../../repositories';
import { ResourceRepository } from '../../repositories/resource';

class RegisterResourcesOnSale {
  async format(resourcesList: IResourceRequest[], id_sale: string) {
    const resourceRepository = new ResourceRepository();

    const promisseResourceSaleList = resourcesList.map(async (item) => {
      const name = item.resource_name;
      // pega o id dos recursos pelo nome que é uma chave unica
      const resource = await resourceRepository.getResourceByName(name);

      const formatedResourceSale: IResourceSale = {
        // pegar id_sale após ter a criado com o service
        // no controller de sales
        sale_id: id_sale,
        // registra o id do recurso encontrado pelo nome
        resource_id: resource.id_resource,
        // quantidade do recuso encontrado a ser vendida
        quantity: item.quantity,
      };

      return formatedResourceSale;
    });

    // Aguarda e tranforma o array de promisses em
    // um array com os resultados
    const resourceSaleList = await Promise.all(promisseResourceSaleList);

    return resourceSaleList;
  }

  async execute(formatedList: IResourceSale[]) {
    const resourceSaleRepository = new ResourceSaleRepository();

    // console.log(formatedList);

    const newResourceSaleList = formatedList.map((ResourceSaleData) => {
      const newResourceSale: ResourceSale =
        resourceSaleRepository.createResourceSale(ResourceSaleData);

      return newResourceSale;
    });

    await resourceSaleRepository.saveMultiple(newResourceSaleList);
  }
}

export default RegisterResourcesOnSale;
