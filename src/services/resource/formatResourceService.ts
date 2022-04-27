import { IResource } from '../../repositories/resource';
import { regulateNames } from '../../utils';

class FormatResourceService {
  async execute(resourceData: IResource, id_User: string): Promise<any> {
    const {
      resource_name,
      unit_cost,
      units,
      description,
      createdOn,
      updatedAt,
    } = resourceData;

    const name = regulateNames(resource_name);

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
