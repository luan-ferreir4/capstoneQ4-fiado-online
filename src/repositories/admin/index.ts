import { getRepository, Repository } from 'typeorm';
import { Admin } from '../../entities';
import { IAdmin, IAdminRepo, IUpdateAdmin, IAdminToken } from './interfaces';

class AdminsRepository implements IAdminRepo {
  private ormRepository: Repository<Admin>;

  constructor() {
    this.ormRepository = getRepository(Admin);
  }

  registerAdmin = (requestAdminData: IAdmin) =>
    this.ormRepository.create(requestAdminData);

  saveAdmin = (adminData: IAdmin) => this.ormRepository.save(adminData);

  updateAdmin = async (id_admin: string, newAdminData: IUpdateAdmin) =>
    await this.ormRepository.update({ id_admin }, newAdminData);

  deleteAdmin = async (id_admin: string) =>
    await this.ormRepository.delete({ id_admin });

  getAllAdmin = async () => await this.ormRepository.find();

  getOneAdmin = async (adminEmail: string) =>
    await this.ormRepository.findOne({ email: adminEmail });

  getOneAdminById = async (id_admin: string) =>
    await this.ormRepository.findOne({ where: { id_admin } });
}

export { AdminsRepository, IAdmin, IUpdateAdmin, IAdminToken };
