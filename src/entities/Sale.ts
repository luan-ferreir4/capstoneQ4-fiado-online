import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Customer, ResourceSale, User } from './index';

@Entity('sales')
class Sale {
  @PrimaryGeneratedColumn('uuid')
  id_sale: string;

  @Column()
  sold_at: Date;

  @Column()
  expires_in: Date;

  @Column({ default: false })
  closed: boolean;

  @ManyToOne(() => User, (user: User) => user.sales)
  user: User;

  @ManyToOne(() => Customer, (customer: Costumer) => customer.sales)
  customer: Customer;

  @OneToMany(
    () => ResourceSale,
    (resources_sales: ResourceSale) => resources_sales.sale
  )
  resources_sales!: ResourceSale[];
}

export default Sale;
