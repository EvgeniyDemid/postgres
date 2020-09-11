import {ApiProperty} from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({description: 'Идентификатор'})
  id: number;

  @ApiProperty({description: 'Access token'})
  accessToken: string;


  @ApiProperty({description: 'Email'})
  email: string;


}
