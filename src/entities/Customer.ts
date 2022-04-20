import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from './User';
import Sale from './Sale';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('uuid')
  id_customers: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @ManyToOne(() => User, (user: User) => user.customers)
  user: User;

  @OneToMany(() => Sale, (sale: Sale) => sale.customer)
  sales: Sale[];
}

export default Customer;
