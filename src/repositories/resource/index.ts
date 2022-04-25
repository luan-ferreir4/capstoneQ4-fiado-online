import { Repository, getRepository } from 'typeorm';
import { Resource } from '../../entities';
import { IResource, IUpdateResource, IResourceRepo } from './interfaces';

class ResourceRepository implements IResourceRepo {
  private ormRepository: Repository<Resource>;

  constructor() {
    this.ormRepository = getRepository(Resource);
  }

  createResource = (requestResourceData: IResource) =>
    this.ormRepository.create(requestResourceData);

  saveResource = async (resourceData: Resource) =>
    this.ormRepository.save(resourceData);

  updateResource = async (
    id_resource: string,
    newResourceData: IUpdateResource
  ) => this.ormRepository.update({ id_resource }, newResourceData);

  deleteResource = async (id_resource: string) =>
    this.ormRepository.delete({ id_resource });

  getOneResource = (id_resource: string) =>
    this.ormRepository.findOne({ id_resource });

  getResourceByName = async (name: string) =>
    this.ormRepository.findOne({ name });

  getAllResourcers = () => this.ormRepository.find();
}

export { ResourceRepository, IResource };
