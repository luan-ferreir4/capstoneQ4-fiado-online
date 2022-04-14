import { Customer, Resource, Sale, User } from '../../entities';

type ExpiresIN = string | number;

interface JWTConfig {
  secretKey: string;
  expiresIn: ExpiresIN;
}

interface IUser {
  id_user?: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
  balance: number;
  createdIn: Date;
  weekly_report_day: number;
  monthly_report_day: number;
  resources: Resource[];
  sales: Sale[];
  customers: Customer[];
}

interface IUserRepo {
  createUser: (requestDataUser: IUser) => User;
  saverUser: (user: IUser) => Promise<User>;
  deleteUser: (id: string) => Promise<void>;
  updateUser: (id: string, data: any) => Promise<void>;
  getOneUser: (id: string) => Promise<User>;
  findUserByCpf: (cpf: string) => Promise<User>;
}

export { IUser, IUserRepo, JWTConfig };
