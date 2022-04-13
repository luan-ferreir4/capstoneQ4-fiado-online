import { EntityRepository, Repository } from 'typeorm';
import Resources from '../entities/Resources';

@EntityRepository(Resources)
export default class UserRepository extends Repository<Resources> {}
