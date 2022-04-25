import { IResource } from '../../repositories/resource';

class FormatResourceService {
  async execute(resourceData: IResource, id_User: string): Promise<any> {
    const { name, unit_cost, units, description, createdOn, updatedAt } =
      resourceData;

    const formatedResource = {
      name,
      unit_cost,
      units,
      description,
      createdOn,
      updatedAt,
      user: id_User,
    };

    return formatedResource;
  }
}

export default FormatResourceService;
