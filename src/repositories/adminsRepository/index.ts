import { getRepository, Repository } from 'typeorm';
import { Admin } from '../../entities';
import { IAdmin, IAdminRepo, IUpdateAdmin } from './interfaces';

class AdminsRepository implements IAdminRepo {
  private ormRepository: Repository<Admin>;

  constructor() {
    this.ormRepository = getRepository(Admin);
  }

  registerAdmin = (requestAdminData: IAdmin) =>
    this.ormRepository.create(requestAdminData);

  saveAdmin = (adminData: IAdmin) => this.ormRepository.save(adminData);

  updateAdmin = async (adminEmail: string, newAdminData: IUpdateAdmin) =>
    await this.ormRepository.update({ email: adminEmail }, newAdminData);

  deleteAdmin = async (adminEmail: string) =>
    await this.ormRepository.delete({ email: adminEmail });

  getAllAdmin = async () => await this.ormRepository.find();

  getOneAdmin = async (adminEmail: string) =>
    await this.ormRepository.findOne({ email: adminEmail });
}

export default AdminsRepository;
