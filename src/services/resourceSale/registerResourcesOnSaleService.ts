import { ResourceSale, User } from '../../entities';
import {
  IResourceRequest,
  IResourceSale,
  ResourceSaleRepository,
} from '../../repositories';

class RegisterResourcesOnSale {
  async format(
    resourcesList: IResourceRequest[],
    id_sale: string,
    user: User
  ): Promise<any> {
    const userResourcesInStock = await user.resources;

    const promisseResourceSaleList = resourcesList.map(
      async (resourceToSale) => {
        const name = resourceToSale.resource_name;
        // pega o id dos recursos pelo nome que é uma chave unica
        const resourceInStock = userResourcesInStock.find(
          (resource) => resource.name === name
        );

        const formatedResourceSale = {
          // quantidade do recurso encontrado a ser vendida
          quantity: resourceToSale.quantity,
          // Custo da unidade do recurso na venda
          unit_sold_cost: resourceToSale.unit_sold_cost,
          // pegar id_sale após ter a criado com o service
          // no controller de sales
          sale: id_sale,
          // registra o id do recurso encontrado pelo nome
          resource: resourceInStock.id_resource,
        };

        return formatedResourceSale;
      }
    );

    // Aguarda e tranforma o array de promisses em
    // um array com os resultados
    const resourceSaleList = await Promise.all(promisseResourceSaleList);

    return resourceSaleList;
  }

  async execute(formatedList: IResourceSale[]) {
    const resourceSaleRepository = new ResourceSaleRepository();

    const newResourceSaleList = formatedList.map((ResourceSaleData) => {
      const newResourceSale: ResourceSale =
        resourceSaleRepository.createResourceSale(ResourceSaleData);

      return newResourceSale;
    });

    await resourceSaleRepository.saveMultiple(newResourceSaleList);
  }
}

export default RegisterResourcesOnSale;
