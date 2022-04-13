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

  @Column({ unique: true })
  email: string;

  @Column()
  phone_number: number;

  @ManyToOne(() => User, (user) => user.customers)
  user: User;

  @OneToMany(() => Sale, (sales) => sales.customer)
  sales: Sale[];
}

export default Customer;
