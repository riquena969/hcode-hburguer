import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    value: number;
}
 