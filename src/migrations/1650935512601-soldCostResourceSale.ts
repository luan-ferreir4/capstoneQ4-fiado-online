import { MigrationInterface, QueryRunner } from 'typeorm';

export class soldCostResourceSale1650935512601 implements MigrationInterface {
  name = 'soldCostResourceSale1650935512601';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "resources_sales" ADD "unity_sold_cost" double precision NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "resources_sales" DROP COLUMN "unity_sold_cost"`
    );
  }
}
