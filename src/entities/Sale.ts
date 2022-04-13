import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// import { Customer, ResourceSales, User } from './index';

const currentDate = new Date();

const dueDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() + 14
);

@Entity('sales')
class Sale {
  @PrimaryGeneratedColumn('uuid')
  id_sale: string;

  @Column({ default: currentDate })
  sold_at: Date;

  @Column({ default: dueDate })
  expires_in: Date;

  @Column({ default: false })
  closed: boolean;

  //   @ManyToOne(() => User, (user: User) => user.sales)
  //   user: User;

  //   @ManyToOne(() => Customer, (customer: Costumer) => customer.sales)
  //   customer: Customer;

  //   @OneToMany(
  //     () => ResourcesSales,
  //     (resources_sales: ResourceSales) => resources_sales.sale
  //   )
  //   resources_sales!: ResourcesSales[];
}

export default Sale;
