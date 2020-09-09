import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './userDto/createUserDto';
import { ResponsUserDto } from './userDto/responsUserDto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

 @Post()
  async createUser (@Body()data: CreateUserDto):Promise<ResponsUserDto>{
    const user = await this.userService.create(data);
    return user.toResponseUser()
 }
 @Get()
 showAll():Promise<ResponsUserDto[]>{
     return this.userService.showAll()
 }

}
