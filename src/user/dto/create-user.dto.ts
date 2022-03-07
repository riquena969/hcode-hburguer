import { ApiProperty } from '@nestjs/swagger';
import { users_user_type } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  street?: string;

  @ApiProperty()
  number?: string;

  @ApiProperty()
  complement?: string;

  @ApiProperty()
  district?: string;

  @ApiProperty()
  city?: string;

  @ApiProperty()
  uf?: string;

  @ApiProperty()
  zipcode?: string;

  @ApiProperty()
  user_type?: users_user_type;
}
