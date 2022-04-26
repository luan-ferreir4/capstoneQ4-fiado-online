import { MigrationInterface, QueryRunner } from 'typeorm';

export class cascadeDelete1651011742912 implements MigrationInterface {
  name = 'cascadeDelete1651011742912';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sales" DROP CONSTRAINT "FK_df50d7c2573e1eef00896fdd233"`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP CONSTRAINT "FK_ac2a482773ccbb064dd6d77fc98"`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" DROP CONSTRAINT "FK_4472bb87b8e5ed1b13e325664f7"`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" DROP CONSTRAINT "FK_31191cd00df6347b32de124dced"`
    );
    await queryRunner.query(
      `ALTER TABLE "resources" DROP CONSTRAINT "FK_1cf71bf003b11d34b3102868e90"`
    );
    await queryRunner.query(
      `ALTER TABLE "customers" DROP CONSTRAINT "FK_aed68855b8d1b6b011285a8c8bf"`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_df50d7c2573e1eef00896fdd233" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_ac2a482773ccbb064dd6d77fc98" FOREIGN KEY ("customerIdCustomers") REFERENCES "customers"("id_customers") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" ADD CONSTRAINT "FK_4472bb87b8e5ed1b13e325664f7" FOREIGN KEY ("resourceIdResource") REFERENCES "resources"("id_resource") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" ADD CONSTRAINT "FK_31191cd00df6347b32de124dced" FOREIGN KEY ("saleIdSale") REFERENCES "sales"("id_sale") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources" ADD CONSTRAINT "FK_1cf71bf003b11d34b3102868e90" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD CONSTRAINT "FK_aed68855b8d1b6b011285a8c8bf" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION`
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
    await queryRunner.query(
      `ALTER TABLE "customers" ADD CONSTRAINT "FK_aed68855b8d1b6b011285a8c8bf" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources" ADD CONSTRAINT "FK_1cf71bf003b11d34b3102868e90" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" ADD CONSTRAINT "FK_31191cd00df6347b32de124dced" FOREIGN KEY ("saleIdSale") REFERENCES "sales"("id_sale") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "resources_sales" ADD CONSTRAINT "FK_4472bb87b8e5ed1b13e325664f7" FOREIGN KEY ("resourceIdResource") REFERENCES "resources"("id_resource") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_ac2a482773ccbb064dd6d77fc98" FOREIGN KEY ("customerIdCustomers") REFERENCES "customers"("id_customers") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_df50d7c2573e1eef00896fdd233" FOREIGN KEY ("userIdUser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
