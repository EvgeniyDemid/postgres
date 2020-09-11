import { Controller, Post, Body, Get, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
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

  @Get(':id')
  async showOne(@Param('id',ParseIntPipe) id:number): Promise<ResponsUserDto>{
    return mapToResponseDto(ResponsUserDto,await this.userService.showOne(id)) 
  }
  @Put(':id')
  async update(@Param('id',ParseIntPipe) id:number,@Body() createUserDto: CreateUserDto ): Promise<ResponsUserDto>{
    return mapToResponseDto(ResponsUserDto,await this.userService.update(id,createUserDto)) 
  }
  @Delete(':id')
  async delete (@Param('id',ParseIntPipe) id:number): Promise<string>{
    return await this.userService.delete(id)
  }
}
