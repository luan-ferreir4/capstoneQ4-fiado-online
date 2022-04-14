import { DeleteResult, UpdateResult } from 'typeorm';
import { Admin } from '../../entities';

interface AdminI {
  id_admin?: string;
  name: string;
  email: string;
  password?: string;
  isAdm: boolean;
}

interface UpdateAdminI {
  name?: string;
  email?: string;
  password?: string;
}

interface AdminRepoI {
  registerAdmin: (adminData: AdminI) => Admin;

  updateAdmin: (
    adminEmail: string,
    newAdminData: UpdateAdminI
  ) => Promise<UpdateResult>;

  deleteAdmin: (adminEmail: string) => Promise<DeleteResult>;

  getAllAdmin: () => Promise<Admin[]>;

  getOneAdmin: (adminEmail: string) => Promise<Admin>;
}

export { AdminRepoI, AdminI, UpdateAdminI };
