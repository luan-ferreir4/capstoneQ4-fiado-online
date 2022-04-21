import { QueryFailedError } from 'typeorm';
import { User } from '../../entities';
import { UserRepository } from '../../repositories';
import { signupOptionsEmail } from '../../templates';
import { ErrorHandler, hidePassword } from '../../utils';
import SendEmail from '../mailer/mailerService';

interface IDetail extends QueryFailedError {
  detail: string;
}

const createUserService = async (user: User) => {
  try {
    const { password, ...newUser } = await new UserRepository().saveUser(user);

    new SendEmail().register(newUser as User, signupOptionsEmail);
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
