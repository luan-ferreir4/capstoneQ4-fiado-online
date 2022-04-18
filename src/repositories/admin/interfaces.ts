import { DeleteResult, UpdateResult } from 'typeorm';
import { Admin } from '../../entities';

interface IAdmin {
  id_admin?: string;
  name: string;
  email: string;
  password?: string;
  isAdm: boolean;
}

interface IUpdateAdmin {
  name?: string;
  email?: string;
  password?: string;
}

interface IAdminRepo {
  registerAdmin: (requestAdminData: IAdmin) => Admin;

  saveAdmin: (adminData: IAdmin) => Promise<Admin>;

  updateAdmin: (
    id_admin: string,
    newAdminData: IUpdateAdmin
  ) => Promise<UpdateResult>;

  deleteAdmin: (id_admin: string) => Promise<DeleteResult>;

  getAllAdmin: () => Promise<Admin[]>;

  getOneAdmin: (adminEmail: string) => Promise<Admin>;
}

export { IAdminRepo, IAdmin, IUpdateAdmin };
