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
        host: this.configService.get('DATABASE_HOST') || 'host',
        port: this.configService.get<number>('DATABASE_PORT') || 5432,
        username: this.configService.get('DATABASE_USER') || 'user',
        password: this.configService.get('DATABASE_PASSWORD') || 'password',
        database: this.configService.get('DATABASE') || 'database',
        synchronize: true,
        logging: true,
        entities: ["dist/**/*.entity{.ts,.js}"],
       } 
    }

}

