import { DeleteResult, UpdateResult } from 'typeorm';
import { Resource, ResourceSale } from '../../entities';

interface IResource {
  id_resource?: string;
  unit_cost: number;
  units: number;
  description: string;
  createdOn: Date;
  updatedOn: Date;
  id_user: string;
  resources_sales?: ResourceSale[];
}

interface IUpdateResource {
  unit_cost?: number;
  units?: number;
  description?: string;
  updatedOn?: Date;
}

interface IResourceRepo {
  createResource: (requestResourceData: IResource) => Resource;

  saveResource: (resourceData: IResource) => Promise<Resource>;

  updateResource: (
    id_resource: string,
    newResourceData: IUpdateResource
  ) => Promise<UpdateResult>;

  deleteResource: (id_resource: string) => Promise<DeleteResult>;

  getOneResource: (id_resource: string) => Promise<Resource>;

  getAllResourcers: () => Promise<Resource[]>;
}

export { IResourceRepo, IUpdateResource, IResource };
