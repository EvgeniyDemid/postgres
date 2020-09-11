import { Controller, Post, Body, Get, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './userDto/createUserDto';
import { ResponsUserDto } from './userDto/responsUserDto';
import { ValidationPipe } from 'src/shared/validation/validation.pipe';
import { mapToResponseDto } from 'src/shared/function/map-to-response-dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

 @Post()
  async createUser (@Body(new ValidationPipe())data: CreateUserDto):Promise<ResponsUserDto>{
    const user = await this.userService.create(data);
    console.log(user)
    return mapToResponseDto(ResponsUserDto, user)
 }
 @Get()
 showAll():Promise<ResponsUserDto[]>{
     const users= this.userService.showAll();
     return 
 }

}
