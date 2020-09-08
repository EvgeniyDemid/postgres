import {
  IsNotEmpty,
  IsEmail,
  IsString,
  Matches,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Поле email обязательно для заполнения' })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{16,})/,
    { message: 'Слабый пароль ' },
  )
  password: string;

  @IsNotEmpty({ message: 'Поле Имя обязательно для заполнения ' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'Поле Фамилия обязательно для заполнения ' })
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  phone: string;
}
