import { Resource, User } from '../../entities';

class GetAllUserResourceService {
  async execute(user: User): Promise<Resource[]> {
    const userResources = await user.resources;

    return userResources;
  }
}

export default GetAllUserResourceService;
