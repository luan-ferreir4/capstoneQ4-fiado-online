import jwt from 'jsonwebtoken';
import { JWTConfig } from '../../configs';
import { IUser, UserRepository } from '../../repositories';

class LoginUserService {
  async execute(email: string): Promise<string> {
    const user: IUser = await new UserRepository().findUserByEmail(email);

    const token = jwt.sign({ cpf: user.cpf }, JWTConfig.secret, {
      expiresIn: JWTConfig.expiresIn,
    });
    return token;
  }
}

export default LoginUserService;
