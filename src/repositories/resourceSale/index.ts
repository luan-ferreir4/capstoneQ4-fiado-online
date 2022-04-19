import { getRepository, Repository } from 'typeorm';
import { ResourceSale } from '../../entities';
import { IResourceSale, IResourceSaleRepo } from './interfaces';

class ResourceSaleRepository implements IResourceSaleRepo {
  private ormRepository: Repository<ResourceSale>;

  constructor() {
    this.ormRepository = getRepository(ResourceSale);
  }

  createResourceSale = (resourceSaleData: IResourceSale) =>
    this.ormRepository.create(resourceSaleData);

  saveResourceSale = async (newResourceSaleData: ResourceSale) =>
    await this.ormRepository.save(newResourceSaleData);
}

export { ResourceSaleRepository, IResourceSale, IResourceSaleRepo };
