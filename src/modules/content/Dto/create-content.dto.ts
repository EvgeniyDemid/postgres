import { IsNotEmpty, IsString} from 'class-validator';

export class CreateContentDto {
    @IsNotEmpty({message: 'Поле title обязательно для заполнения'})
    @IsString()
    title: string;

    @IsNotEmpty({message: 'Поле avtor обязательно для заполнения'})
    @IsString()
    avtor:string;
    
    @IsNotEmpty({message: 'Поле discription обязательно для заполнения'})
    @IsString()
    discription: string;
}