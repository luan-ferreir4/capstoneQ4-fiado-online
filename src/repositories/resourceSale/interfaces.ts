/* eslint-disable no-unused-vars */
import { Resource, ResourceSale, Sale } from '../../entities';

interface IResourceSale {
  resources_sales_id?: string;
  quantity: number;
  id_resource: string;
  id_sale: string;
  resource?: Resource;
  sale?: Sale;
}

interface IResourceSaleRepo {
  createResourceSale: (resourceSaleData: IResourceSale) => ResourceSale;
  saveResourceSale: (
    newResourceSaleData: ResourceSale
  ) => Promise<ResourceSale>;
  saveMultiple: (ResourceSaleList: ResourceSale[]) => Promise<any>;
}

export { IResourceSale, IResourceSaleRepo };
