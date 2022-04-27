import { Repository, getRepository } from 'typeorm';
import { User } from '../../entities';
import { IUser, IUserRepo } from './interfaces';

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  createUser = (requestDataUser: IUser) =>
    this.ormRepository.create(requestDataUser);
  saveUser = async (user: IUser) => await this.ormRepository.save(user);
  deleteUser = async (id: string) => await this.ormRepository.delete(id);
  updateUser = async (id_user: string, data: any) => {
    return await this.ormRepository.update(id_user, {
      ...data,
    });
  };
  getOneUser = async (id_user: string) => {
    return await this.ormRepository.findOne(id_user);
  };
  findUserByCpf = async (cpf: string) => {
    return await this.ormRepository.findOne(cpf);
  };
  findUserByEmail = async (email: string) => {
    return await this.ormRepository.findOne({ where: { email } });
  };
  getAllUsers = async () => {
    return await this.ormRepository.find();
  };
}
export { UserRepository, IUser };
