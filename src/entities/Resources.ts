import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // ManyToOne,
  // JoinColumn,
} from 'typeorm';
// import User from './User';

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

  /* @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  id_user: string; */
}

export default Resources;
