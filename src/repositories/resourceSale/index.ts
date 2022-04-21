import { getRepository, Repository } from 'typeorm';
import { ResourceSale } from '../../entities';
import { IResourceSale, IResourceSaleRepo } from './interfaces';

class ResourceSaleRepository implements IResourceSaleRepo {
  private ormRepository: Repository<ResourceSale>;

  constructor() {
    this.ormRepository = getRepository(ResourceSale);
  }

  createResourceSale = (resourceSaleData: IResourceSale) =>
    this.ormRepository.create(resourceSaleData as ResourceSale);

  saveResourceSale = async (newResourceSaleData: ResourceSale) =>
    await this.ormRepository.save(newResourceSaleData);

  saveMultiple = async (ResourceSaleList: ResourceSale[]) => {
    return await this.ormRepository
      .createQueryBuilder()
      .insert()
      .values(ResourceSaleList)
      .returning(['*'])
      .execute()
      .then((ResourceSaleList) => ResourceSaleList.generatedMaps);
  };
}

export { ResourceSaleRepository, IResourceSale, IResourceSaleRepo };
