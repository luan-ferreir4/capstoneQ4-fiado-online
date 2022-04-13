import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // ManyToOne,
  // JoinColumn,
  // OneToMany,
} from 'typeorm';
// import User from './User';
// import ResourceSales from "./ResourceSales".

@Entity('resources')
class Resources {
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

  @Column()
  updatedAt: Date;

  /*   @ManyToOne(() => User, (user: User) => user.resources)
  id_user: string;

  @OneToMany(
    () => ResourcesSales,
    (resources_sales: ResourceSales) => resources_sales.resource
  )
  resources_sales!: ResourcesSales[]; */
}

export default Resources;
