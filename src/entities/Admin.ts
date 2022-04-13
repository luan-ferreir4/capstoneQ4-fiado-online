import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Admin {
  @PrimaryGeneratedColumn('uuid')
  id_admin: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;
}

export default Admin;
