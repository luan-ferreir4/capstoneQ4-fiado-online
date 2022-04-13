import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // ManyToOne,
  // JoinColumn,
  // OneToMany,
} from 'typeorm';
// import User from './User';
// import ResourceSale from "./ResourceSale".

@Entity('resources')
class Resource {
  @PrimaryGeneratedColumn('uuid')
  id_resource: string;

  @Column()
  unit_cost: number;

  @Column()
  units: number;

  @Column()
  description: string;

  @Column({ type: 'date', default: () => 'NOW()' })
  createdOn: Date;

  @Column({ type: 'date', default: () => 'NOW()' })
  updatedAt: Date;

  @ManyToOne(() => User, (user: User) => user.resources)
  id_user: string;

  @OneToMany(
    () => ResourceSale,
    (resources_sales: ResourceSale) => resources_sales.resource
  )
  resources_sales!: ResourceSale[];
}

export default Resource;
