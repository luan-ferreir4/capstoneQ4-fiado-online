import { MigrationInterface, QueryRunner } from 'typeorm';

export class tablesCreated1649960640658 implements MigrationInterface {
  name = 'tablesCreated1649960640658';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "admins" ("id_admin" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, CONSTRAINT "UQ_051db7d37d478a69a7432df1479" UNIQUE ("email"), CONSTRAINT "PK_0827102ceb21bbf3896a75b6291" PRIMARY KEY ("id_admin"))`
    );
    await queryRunner.query(
      `CREATE TABLE "sales" ("id_sale" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold_at" TIMESTAMP NOT NULL, "expires_in" TIMESTAMP NOT NULL, "closed" boolean NOT NULL DEFAULT false, "userIdUser" uuid, "customerIdCustomers" uuid, CONSTRAINT "PK_14df41ad90010de4de26f35e9bf" PRIMARY KEY ("id_sale"))`
    );
    await queryRunner.query(
      `CREATE TABLE "resources_sales" ("resources_sales_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "resourceIdResource" uuid, "saleIdSale" uuid, CONSTRAINT "PK_7f03f00d65ff14dbe9897ec620e" PRIMARY KEY ("resources_sales_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "resources" ("id_resource" uuid NOT NULL DEFAULT uuid_generate_v4(), "unit_cost" integer NOT NULL, "units" integer NOT NULL, "description" character varying NOT NULL, "createdOn" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "userIdUser" uuid, CONSTRAINT "PK_2d6d4b1026ea54355f7f8b5b417" PRIMARY KEY ("id_resource"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id_user" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "password" character varying NOT NULL, "balance" integer NOT NULL, "createdIn" date NOT NULL DEFAULT NOW(), "weekly_report_day" integer, "monthly_report_day" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_fbb07fa6fbd1d74bee9782fb945" PRIMARY KEY ("id_user"))`
    );
    await queryRunner.query(
      `CREATE TABLE "customers" ("id_customers" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" integer NOT NULL, "userIdUser" uuid, CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"), CONSTRAINT "PK_126c7b6ee71c0a7c4bea15d599c" PRIMARY KEY ("id_customers"))`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_df50d7c2573e1eef00896fdd233" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_ac2a482773ccbb064dd6d77fc98" FOREIGN KEY ("customerIdCustomers") REFERENCES "customers"("id_customers") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" ADD CONSTRAINT "FK_4472bb87b8e5ed1b13e325664f7" FOREIGN KEY ("resourceIdResource") REFERENCES "resources"("id_resource") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" ADD CONSTRAINT "FK_31191cd00df6347b32de124dced" FOREIGN KEY ("saleIdSale") REFERENCES "sales"("id_sale") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources" ADD CONSTRAINT "FK_1cf71bf003b11d34b3102868e90" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`
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
      `ALTER TABLE "resources" DROP CONSTRAINT "FK_1cf71bf003b11d34b3102868e90"`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" DROP CONSTRAINT "FK_31191cd00df6347b32de124dced"`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" DROP CONSTRAINT "FK_4472bb87b8e5ed1b13e325664f7"`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP CONSTRAINT "FK_ac2a482773ccbb064dd6d77fc98"`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP CONSTRAINT "FK_df50d7c2573e1eef00896fdd233"`
    );
    await queryRunner.query(`DROP TABLE "customers"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "resources"`);
    await queryRunner.query(`DROP TABLE "resources_sales"`);
    await queryRunner.query(`DROP TABLE "sales"`);
    await queryRunner.query(`DROP TABLE "admins"`);
  }
}
