import { Controller, Post, Body, Get, ParseIntPipe, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './userDto/createUserDto';
import { ResponsUserDto } from './userDto/responsUserDto';
import { mapToResponseDto } from 'src/shared/function/map-to-response-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<ResponsUserDto> {
    const user = await this.userService.create(createUserDto);
    return mapToResponseDto(ResponsUserDto,user)
  }
  @Get()
  async showAll(): Promise<ResponsUserDto[]> {
    const users = await this.userService.showAll();
    return users.map(user=>mapToResponseDto(ResponsUserDto,user)) 
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
