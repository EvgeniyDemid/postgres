import { Injectable, Logger } from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions} from '@nestjs/typeorm';



@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory  {
    constructor( private readonly configService: ConfigService){
        
    }
    createTypeOrmOptions(): TypeOrmModuleOptions {
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
        migrations:["dist/**/migration/*{.js,.ts}"],
       // cli:{
       //     migrationsDir: 'src/modules/database/migration'
       // }
       } 
    }

}

