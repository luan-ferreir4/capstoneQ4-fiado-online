/* eslint-disable no-unused-vars */
import { DeleteResult, UpdateResult } from 'typeorm';
import { Resource } from '../../entities';

interface IResource {
  id_resource?: string;
  resource_name: string;
  unit_cost: number;
  units: number;
  description: string;
  createdOn: Date;
  updatedAt: Date;
  id_user: string;
}

interface IUpdateResource {
  resource_name?: string;
  unit_cost?: number;
  units?: number;
  description?: string;
  updatedAt?: Date;
}

interface IResourceRepo {
  createResource: (requestResourceData: IResource) => Resource;

  saveResource: (resourceData: Resource) => Promise<Resource>;

  updateResource: (
    id_resource: string,
    newResourceData: IUpdateResource
  ) => Promise<UpdateResult>;

  deleteResource: (id_resource: string) => Promise<DeleteResult>;

  getOneResource: (id_resource: string) => Promise<Resource>;

  getResourceByName: (name: string) => Promise<Resource>;

  getAllResourcers: () => Promise<Resource[]>;
}

export { IResourceRepo, IUpdateResource, IResource };
