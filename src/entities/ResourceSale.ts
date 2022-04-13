import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Resource, Sale } from './index';

@Entity('resources_sales')
class ResourceSale {
  @PrimaryGeneratedColumn('uuid')
  public resources_sales_id!: string;

  @Column()
  public quantity!: number;

  @ManyToOne(() => Resource, (resources) => resources.resources_sales)
  public resource!: Resource;

  @ManyToOne(() => Sale, (sales) => sales.resources_sales)
  public sale!: Sale;
}

export default ResourceSale;
