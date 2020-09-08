import {
    IsNotEmpty,
    IsEmail,
    IsString,
    Matches,
    IsOptional,
  } from 'class-validator';
import { PrimaryRowDto } from 'src/shared/dto/primary-row.dto';
  
  export class ResponsUserDto extends PrimaryRowDto  {
    @IsEmail()
    email: string;
  
    @IsString()
    firstName: string;
  
    @IsString()
    lastName: string;
  
    @IsString()
    address: string;
  
    @IsString()
    city: string;
  
    @IsString()
    phone: string;
  }
  