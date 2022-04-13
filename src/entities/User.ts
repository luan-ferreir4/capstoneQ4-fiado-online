import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { Resources } from "./Resources"
// import { Sale } from "./Sale"

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id_user: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: number;

  @Column()
  password: string;

  @Column()
  balance: number;

  @Column({ type: 'date', default: () => 'NOW()' })
  createdIn: Date;

  @Column()
  weekly_report_day: number;

  @Column()
  monthly_report_day: number;

  // @OneToMany( ()  => Resources, resources => resources.user)
  // resources: Resources[];

  // @OneToMany( ()  => Sale, sales => sales.user)
  // sales: Sale[];
}

export default User;
