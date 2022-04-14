import { getRepository, Repository } from 'typeorm';
import { Admin } from '../../entities';
import { AdminI, AdminRepoI, UpdateAdminI } from './interfaces';

class AdminsRepository implements AdminRepoI {
  private ormRepository: Repository<Admin>;

  constructor() {
    this.ormRepository = getRepository(Admin);
  }

  registerAdmin = (adminData: AdminI) => this.ormRepository.create(adminData);

  updateAdmin = async (adminEmail: string, newAdminData: UpdateAdminI) =>
    await this.ormRepository.update({ email: adminEmail }, newAdminData);

  deleteAdmin = async (adminEmail: string) =>
    await this.ormRepository.delete({ email: adminEmail });

  getAllAdmin = async () => await this.ormRepository.find();

  getOneAdmin = async (adminEmail: string) =>
    await this.ormRepository.findOne({ email: adminEmail });
}

export default AdminsRepository;
