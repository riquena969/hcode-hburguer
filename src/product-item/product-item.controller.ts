import { Controller } from '@nestjs/common';
import { ProductItemService } from './product-item.service';

@Controller('product-item')
export class ProductItemController {
  constructor(private readonly productItemService: ProductItemService) {}
}
