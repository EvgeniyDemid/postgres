import {MigrationInterface, QueryRunner} from "typeorm";

export class DatabaseUpdete1600866769985 implements MigrationInterface {
    name = 'DatabaseUpdete1600866769985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // console.log(process.cwd())
        await queryRunner.query(`CREATE TABLE "content" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(255) DEFAULT null, "avtor" character varying(255) DEFAULT null, "discription" character varying(255) DEFAULT null, CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "email" character varying(255) DEFAULT null, "password" character varying(255) DEFAULT null, "firstName" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "address" character varying(255) DEFAULT null, "city" character varying(255) DEFAULT null, "country" character varying(255) DEFAULT null, "phone" character varying(20) DEFAULT null, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "content"`);
    }

}
