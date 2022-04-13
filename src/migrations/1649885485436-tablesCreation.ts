import {MigrationInterface, QueryRunner} from "typeorm";

export class tablesCreation1649885485436 implements MigrationInterface {
    name = 'tablesCreation1649885485436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "resources_sales" ("resources_sales_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "resourceIdResource" uuid, "saleIdSale" uuid, CONSTRAINT "PK_7f03f00d65ff14dbe9897ec620e" PRIMARY KEY ("resources_sales_id"))`);
        await queryRunner.query(`CREATE TABLE "sales" ("id_sale" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold_at" TIMESTAMP NOT NULL, "expires_in" TIMESTAMP NOT NULL, "closed" boolean NOT NULL DEFAULT false, "userIdUser" uuid, CONSTRAINT "PK_14df41ad90010de4de26f35e9bf" PRIMARY KEY ("id_sale"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id_user" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" integer NOT NULL, "password" character varying NOT NULL, "balance" integer NOT NULL, "createdIn" date NOT NULL DEFAULT NOW(), "weekly_report_day" integer, "monthly_report_day" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_fbb07fa6fbd1d74bee9782fb945" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`CREATE TABLE "resources" ("id_resource" uuid NOT NULL DEFAULT uuid_generate_v4(), "unit_cost" integer NOT NULL, "units" integer NOT NULL, "description" character varying NOT NULL, "createdOn" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "userIdUser" uuid, CONSTRAINT "PK_2d6d4b1026ea54355f7f8b5b417" PRIMARY KEY ("id_resource"))`);
        await queryRunner.query(`ALTER TABLE "resources_sales" ADD CONSTRAINT "FK_4472bb87b8e5ed1b13e325664f7" FOREIGN KEY ("resourceIdResource") REFERENCES "resources"("id_resource") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resources_sales" ADD CONSTRAINT "FK_31191cd00df6347b32de124dced" FOREIGN KEY ("saleIdSale") REFERENCES "sales"("id_sale") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_df50d7c2573e1eef00896fdd233" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resources" ADD CONSTRAINT "FK_1cf71bf003b11d34b3102868e90" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resources" DROP CONSTRAINT "FK_1cf71bf003b11d34b3102868e90"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_df50d7c2573e1eef00896fdd233"`);
        await queryRunner.query(`ALTER TABLE "resources_sales" DROP CONSTRAINT "FK_31191cd00df6347b32de124dced"`);
        await queryRunner.query(`ALTER TABLE "resources_sales" DROP CONSTRAINT "FK_4472bb87b8e5ed1b13e325664f7"`);
        await queryRunner.query(`DROP TABLE "resources"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "sales"`);
        await queryRunner.query(`DROP TABLE "resources_sales"`);
    }

}
