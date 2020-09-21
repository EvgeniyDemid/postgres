import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { LoggerModule } from '../Loger/LoggerModule';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ]),
    LoggerModule
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],

})
export class UsersModule {}
