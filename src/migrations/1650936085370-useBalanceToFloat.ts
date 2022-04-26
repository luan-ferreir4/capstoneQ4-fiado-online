import { MigrationInterface, QueryRunner } from 'typeorm';

export class useBalanceToFloat1650936085370 implements MigrationInterface {
  name = 'useBalanceToFloat1650936085370';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "balance"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "balance" double precision NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "balance"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "balance" integer NOT NULL`
    );
  }
}
