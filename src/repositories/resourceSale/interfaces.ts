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
  createSale: (resourceSaleData: IResourceSale) => ResourceSale;
  saveSale: (newResourceSaleData: ResourceSale) => Promise<ResourceSale>;
}

export { IResourceSale, IResourceSaleRepo };
