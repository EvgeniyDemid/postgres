import { Expose } from 'class-transformer';
import { PrimaryRowDto } from 'src/shared/dto/primary-row.dto';

export class ResponsUserDto extends PrimaryRowDto {
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

  @Expose(/*{name: 'phoneNumber'}*/)
  phone: string;
}
