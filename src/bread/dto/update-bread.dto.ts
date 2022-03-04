import { PartialType } from '@nestjs/swagger';
import { CreateBreadDto } from './create-bread.dto';

export class UpdateBreadDto extends PartialType(CreateBreadDto) {}
