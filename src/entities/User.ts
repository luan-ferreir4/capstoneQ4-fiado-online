import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Customer from './Customer';
import Resource from './Resource';
import Sale from './Sale';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id_user: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  password: string;

  @Column()
  balance: number;

  @Column({ type: 'date', default: () => 'NOW()' })
  createdIn: Date;

  @Column({ nullable: true })
  weekly_report_day: number;

  @Column({ nullable: true })
  monthly_report_day: number;

  @OneToMany(() => Resource, (resource: Resource) => resource.user)
  resources: Resource[];

  @OneToMany(() => Sale, (sale: Sale) => sale.user)
  sales: Sale[];

  @OneToMany(() => Customer, (customer: Customer) => customer.user)
  customers: Customer[];
}

export default User;
