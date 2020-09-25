import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameDiscription1600891362896 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "discriptions" TO "discription"`);  
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN  "discription" TO "discriptions"`);  
    }

}
