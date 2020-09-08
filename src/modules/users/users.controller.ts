import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './userDto/createUserDto';
import { ResponsUserDto } from './userDto/responsUserDto';
import { mapToResponseDto } from 'src/shared/function/map-to-response-dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

 @Post()
 createUser (@Body()createUserDto: CreateUserDto):Promise<ResponsUserDto>{
    const user =  this.userService.create(createUserDto);
    return mapToResponseDto(ResponsUserDto,user)
 }
 @Get()
 showAll():Promise<ResponsUserDto[]>{
     return this.userService.showAll()
 }

}
