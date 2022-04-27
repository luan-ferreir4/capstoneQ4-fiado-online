import {MigrationInterface, QueryRunner} from "typeorm";

export class uniqueNameDisabled1651071339308 implements MigrationInterface {
    name = 'uniqueNameDisabled1651071339308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resources" DROP CONSTRAINT "UQ_f276c867b5752b7cc2c6c797b2b"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resources" ADD CONSTRAINT "UQ_f276c867b5752b7cc2c6c797b2b" UNIQUE ("name")`);
    }

}
