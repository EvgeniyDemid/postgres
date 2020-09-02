import {IsEmail, IsEnum, IsNotEmpty, IsString} from 'class-validator';

export class CreateContentDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    avtor:string;
    
    @IsNotEmpty()
    @IsString()
    discription: string;
}