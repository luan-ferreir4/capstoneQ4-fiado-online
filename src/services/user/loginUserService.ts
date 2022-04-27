import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { JWTConfig } from '../../configs';
import { IUser, UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

class LoginUserService {
  async execute(email: string, password: string): Promise<string> {
    const user: IUser = await new UserRepository().findUserByEmail(email);

    if (!user) {
      throw new ErrorHandler(401, 'email or password is incorrect');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new ErrorHandler(401, 'email or password is incorrect');
    }

    const token = jwt.sign({ cpf: user.cpf }, JWTConfig.secret, {
      expiresIn: JWTConfig.expiresIn,
    });

    return token;
  }
}

export default LoginUserService;
