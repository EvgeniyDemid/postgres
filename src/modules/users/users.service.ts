import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './userDto/createUserDto';
import * as bcrypt from 'bcrypt';
import {merge} from 'lodash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    const { password, email, ...rest } = data;
    const userByEmail = await this.userRepository.findOne({
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
    await this.userRepository.save(userRecord)
    return userRecord;
  }

  async showAll():Promise<UserEntity[]>{
   return this.userRepository.find();
    return await this.userRepository.find()
  }

  async showOne(id:number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new HttpException(
        'Пользователь не найден ',
        HttpStatus.CONFLICT,
      );
    } return user
  }

  async update(id:number, createUserDto: CreateUserDto){
    const user= await this.userRepository.findOne({where:{id}});
    if(!user){
     throw new HttpException('Not found', HttpStatus.NOT_FOUND)
 }   merge(user, createUserDto) ;
    await this.userRepository.save(user);
    return user 
 }

 async delete(id:number){
  const user= await this.userRepository.findOne({where:{id}});
  if(!user){
   throw new HttpException('Not found', HttpStatus.NOT_FOUND)
} await this.userRepository.delete({id});
  return "Пользователь успешно удален" 
}

async findByEmail(email: string): Promise<UserEntity> {
  return this.userRepository.findOne({
    where: { email },
  });
}
validatePassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}
}
