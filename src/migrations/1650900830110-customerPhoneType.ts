import { MigrationInterface, QueryRunner } from 'typeorm';

export class customerPhoneType1650900830110 implements MigrationInterface {
  name = 'customerPhoneType1650900830110';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customers" DROP CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03"`
    );
    await queryRunner.query(
      `ALTER TABLE "customers" DROP COLUMN "phone_number"`
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "phone_number" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customers" DROP COLUMN "phone_number"`
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD "phone_number" integer NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email")`
    );
  }
}
