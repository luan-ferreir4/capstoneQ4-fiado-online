import { MigrationInterface, QueryRunner } from 'typeorm';

export class tableCustomers1649940744995 implements MigrationInterface {
  name = 'tableCustomers1649940744995';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customers" ("id_customers" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" integer NOT NULL, "userIdUser" uuid, CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"), CONSTRAINT "PK_126c7b6ee71c0a7c4bea15d599c" PRIMARY KEY ("id_customers"))`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD "customerIdCustomers" uuid`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_ac2a482773ccbb064dd6d77fc98" FOREIGN KEY ("customerIdCustomers") REFERENCES "customers"("id_customers") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD CONSTRAINT "FK_aed68855b8d1b6b011285a8c8bf" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customers" DROP CONSTRAINT "FK_aed68855b8d1b6b011285a8c8bf"`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP CONSTRAINT "FK_ac2a482773ccbb064dd6d77fc98"`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP COLUMN "customerIdCustomers"`
    );
    await queryRunner.query(`DROP TABLE "customers"`);
  }
}
