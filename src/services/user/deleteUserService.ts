import { DeleteResult } from 'typeorm';
import { UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

class DeleteUserService {
  async execute(id_user: string): Promise<DeleteResult> {
    const deleteUserResult = await new UserRepository().deleteUser(id_user);

    if (deleteUserResult.affected === 0) {
      throw new ErrorHandler(404, 'User not found');
    }

    return deleteUserResult;
  }
}

export default DeleteUserService;
