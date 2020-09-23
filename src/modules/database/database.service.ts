import { Injectable, Logger } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions} from '@nestjs/typeorm';



@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory  {
    constructor( private readonly configService: ConfigService){
        
    }
    createTypeOrmOptions(): TypeOrmModuleOptions {
        console.log(process.cwd() + '/src/modules/database/migration/*.ts')
       return {
        type: 'postgres',
        host: this.configService.get('DATABASE_HOST'),
        port: this.configService.get<number>('DATABASE_PORT'),
        username: this.configService.get('DATABASE_USER') ,
        password: this.configService.get('DATABASE_PASSWORD'),
        database: this.configService.get('DATABASE'),
        dropSchema: false,
        synchronize: false,
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrationsRun:true,
        logging: true,
        migrations:[process.cwd() + '/src/modules/database/migration/*.ts'],
        //cli:{
         //   migrationsDir: '/db/migration'
        //}
       } 
    }

}

