import { AdminsRepository, IAdmin } from '../../repositories';

class RegisterAdminService {
  async execute(newAdminData: IAdmin) {
    const newAdmin = new AdminsRepository().registerAdmin(newAdminData);
    await new AdminsRepository().saveAdmin(newAdmin);

    return newAdmin;
  }
}

export default RegisterAdminService;
