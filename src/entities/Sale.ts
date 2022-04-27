import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import Customer from './Customer';

import ResourceSale from './ResourceSale';
import User from './User';

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

  @ManyToOne(() => User, (user: User) => user.sales, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Customer, (customer: Customer) => customer.sales, {
    onDelete: 'CASCADE',
  })
  customer: Customer;

  @OneToMany(
    () => ResourceSale,
    (resources_sales: ResourceSale) => resources_sales.sale
  )
  resources_sales!: ResourceSale[];
}

export default Sale;
