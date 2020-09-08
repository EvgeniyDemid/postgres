import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './userDto/createUserDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private contentRepository: Repository<UserEntity>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { password, email, ...rest } = createUserDto;
    const userByEmail = await this.contentRepository.findOne({
      where: { email },
    });
    if (userByEmail) {
      throw new HttpException(
        'Пользователь с таким email уже существет ',
        HttpStatus.CONFLICT,
      );
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const userRecord = new UserEntity({ ...rest, email, password:hash });
    await this.contentRepository.save(userRecord)
    return userRecord;
  }

  async showAll():Promise<UserEntity[]>{
    return this.contentRepository.find()
  }
}
