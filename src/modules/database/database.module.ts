import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ConfigModule,
          TypeOrmModule.forRootAsync({
          useClass: DatabaseService
    }),]
})
export class DatabaseModule {}
