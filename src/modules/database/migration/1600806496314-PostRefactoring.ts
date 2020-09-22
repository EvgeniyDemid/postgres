import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1600806496314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "content" RENAME COLUMN "discription" TO "discriptions"`
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "content" RENAME COLUMN "discription" TO "discriptions"`
    }

}
