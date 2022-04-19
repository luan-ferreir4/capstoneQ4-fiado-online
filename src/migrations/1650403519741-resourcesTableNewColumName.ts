import { MigrationInterface, QueryRunner } from 'typeorm';

export class resourcesTableNewColumName1650403519741
  implements MigrationInterface
{
  name = 'resourcesTableNewColumName1650403519741';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "resources" ADD "name" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "resources" ADD CONSTRAINT "UQ_f276c867b5752b7cc2c6c797b2b" UNIQUE ("name")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "resources" DROP CONSTRAINT "UQ_f276c867b5752b7cc2c6c797b2b"`
    );
    await queryRunner.query(`ALTER TABLE "resources" DROP COLUMN "name"`);
  }
}
