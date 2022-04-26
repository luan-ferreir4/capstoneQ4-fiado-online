import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Resource from './Resource';
import Sale from './Sale';

@Entity('resources_sales')
class ResourceSale {
  @PrimaryGeneratedColumn('uuid')
  public resources_sales_id!: string;

  @Column()
  public quantity!: number;

  @Column({ type: 'float' })
  public unity_sold_cost!: number;

  @ManyToOne(() => Resource, (resources) => resources.resources_sales)
  public resource!: Resource;

  @ManyToOne(() => Sale, (sales) => sales.resources_sales)
  public sale!: Sale;
}

export default ResourceSale;
