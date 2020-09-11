import {

  } from 'class-validator';
import { ConstructableDto } from 'src/shared/dto/constructortableDto';
import { Expose } from 'class-transformer';
  
  export class ResponsUserDto extends ConstructableDto  {
    @Expose()
    email: string;
  
    @Expose()
    firstName: string;
  
    @Expose()
    lastName: string;
  
    @Expose()
    address: string;
  
    @Expose()
    city: string;
  
    //@Expose()
   // phone: string;
  }
  