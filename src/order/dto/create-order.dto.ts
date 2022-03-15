import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  products: CreateOrderProductDto[];
}
