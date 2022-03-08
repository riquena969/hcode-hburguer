import { 
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete, 
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  prisma: any;
    constructor(private productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
   return this.prisma.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.prisma.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
