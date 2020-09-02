import { IsNotEmpty, IsString} from 'class-validator';
import { PrimaryRowDto } from 'src/shared/dto/primary-row.dto';

export class ResponsContentDto extends PrimaryRowDto {
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