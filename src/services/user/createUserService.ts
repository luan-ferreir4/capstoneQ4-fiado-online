import { QueryFailedError } from 'typeorm';
import { User } from '../../entities';
import { UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

interface IDetail extends QueryFailedError {
  detail: string;
}

const createUserService = async (user: User) => {
  try {
    const { password, ...newUser } = await new UserRepository().saveUser(user);

    return newUser;
  } catch (error) {
    if (error instanceof QueryFailedError) {
      const resDetail = (error as IDetail).detail;
      if (resDetail.includes('already exists')) {
        throw new ErrorHandler(409, resDetail);
      }
    }
  }
  return null;
};
export default createUserService;
