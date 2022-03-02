import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
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
  userType?: string;
}
