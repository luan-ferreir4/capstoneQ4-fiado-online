import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAdmin1649873888352 implements MigrationInterface {
  name = 'createAdmin1649873888352';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "admin" ("id_admin" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, CONSTRAINT "PK_26c2e9bf2c03e4e61ebd95448b7" PRIMARY KEY ("id_admin"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "admin"`);
  }
}
