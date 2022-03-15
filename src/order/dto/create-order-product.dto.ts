import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateOrderProductDto {
  @ApiProperty()
  @IsString()
  bread: string;

  @ApiProperty()
  @IsArray()
  itens: number[];
}
