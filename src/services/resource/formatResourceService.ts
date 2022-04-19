import { IResource } from '../../repositories/resource';

class FormatResourceService {
  async execute(resourceData: IResource, id_User: string): Promise<any> {
    const { unit_cost, units, description, createdOn, updatedAt } =
      resourceData;

    const formatedResource = {
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
