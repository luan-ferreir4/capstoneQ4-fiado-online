import { UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

class UpdateUserService {
  async execute(id_user: string, userData: any) {
    const updateUserResult = await new UserRepository().updateUser(
      id_user,
      userData
    );

    if (updateUserResult.affected === 0) {
      throw new ErrorHandler(404, 'User not found');
    }

    const updatedUser = await new UserRepository().getOneUser(id_user);

    return updatedUser;
  }
}

export default UpdateUserService;
