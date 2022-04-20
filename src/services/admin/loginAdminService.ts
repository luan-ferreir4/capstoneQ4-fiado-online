import { Request } from 'express';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import { AdminsRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';
import { JWTConfig } from '../../configs';

class LoginAdminService {
  async execute(req: Request) {
    const { email, password } = req.body;

    const admin = await new AdminsRepository().getOneAdmin(email);

    if (!admin) {
      throw new ErrorHandler(401, 'email or password is incorrect');
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      throw new ErrorHandler(401, 'email or password is incorrect');
    }

    const token = jsonwebtoken.sign(
      {
        email: admin.email,
        id_admin: admin.id_admin,
        isAdm: admin.isAdm,
      },
      JWTConfig.secret,
      { expiresIn: JWTConfig.expiresIn }
    );

    return token;
  }
}

export default LoginAdminService;
