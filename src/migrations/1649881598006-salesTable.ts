import {MigrationInterface, QueryRunner} from "typeorm";

export class salesTable1649881598006 implements MigrationInterface {
    name = 'salesTable1649881598006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" ALTER COLUMN "sold_at" SET DEFAULT '"2022-04-13T20:26:41.007Z"'`);
        await queryRunner.query(`ALTER TABLE "sales" ALTER COLUMN "expires_in" SET DEFAULT '"2022-04-27T03:00:00.000Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" ALTER COLUMN "expires_in" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "sales" ALTER COLUMN "sold_at" DROP DEFAULT`);
    }

}
