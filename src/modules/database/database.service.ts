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
        host: this.configService.get('DATABASE_HOST') || 'localhost',
        port: this.configService.get<number>('DATABASE_PORT') || 5432,
        username: this.configService.get('DATABASE_USER') || 'postgres',
        password: this.configService.get('DATABASE_PASSWORD') || '1902',
        database: this.configService.get('DATABASE') || 'postgres',
        synchronize: true,
        logging: true,
        entities: ["dist/**/*.entity{.ts,.js}"],
       } 
    }

}

