import { MigrationInterface, QueryRunner } from 'typeorm';

export class resourceUnitCostToFloat1650985482229
  implements MigrationInterface
{
  name = 'resourceUnitCostToFloat1650985482229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "resources_sales" RENAME COLUMN "unity_sold_cost" TO "unit_sold_cost"`
    );
    await queryRunner.query(`ALTER TABLE "resources" DROP COLUMN "unit_cost"`);
    await queryRunner.query(
      `ALTER TABLE "resources" ADD "unit_cost" double precision NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "resources" DROP COLUMN "unit_cost"`);
    await queryRunner.query(
      `ALTER TABLE "resources" ADD "unit_cost" integer NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" RENAME COLUMN "unit_sold_cost" TO "unity_sold_cost"`
    );
  }
}
