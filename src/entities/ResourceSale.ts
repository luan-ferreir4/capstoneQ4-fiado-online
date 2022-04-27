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
  public unit_sold_cost!: number;

  @ManyToOne(() => Resource, (resources) => resources.resources_sales, {
    onDelete: 'CASCADE',
  })
  public resource!: Resource;

  @ManyToOne(() => Sale, (sales) => sales.resources_sales, {
    onDelete: 'CASCADE',
  })
  public sale!: Sale;
}

export default ResourceSale;
