/* eslint-disable no-unused-vars */
import { Resource, ResourceSale, Sale } from '../../entities';

type resourceType = Resource | string;
type saleType = Sale | string;

interface IResourceSale {
  resources_sales_id?: string;
  quantity: number;
  resource?: resourceType;
  sale?: saleType;
}

interface IResourceSaleRepo {
  createResourceSale: (resourceSaleData: IResourceSale) => ResourceSale;
  saveResourceSale: (
    newResourceSaleData: ResourceSale
  ) => Promise<ResourceSale>;
  saveMultiple: (ResourceSaleList: ResourceSale[]) => Promise<any>;
}

export { IResourceSale, IResourceSaleRepo };
