import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { configModule } from '../config/configModule ';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forFeature([
          UserEntity
        ]),
        configModule,
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '960s' },
          }),
      ],
      providers: [AuthService,LocalStrategy, JwtStrategy],
      controllers: [AuthController]
})
export class AuthModule {}
