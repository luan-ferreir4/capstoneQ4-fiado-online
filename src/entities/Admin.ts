import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('admins')
class Admin {
  @PrimaryGeneratedColumn('uuid')
  id_admin: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;
}

export default Admin;
