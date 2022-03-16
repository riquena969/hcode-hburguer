import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BreadModule } from 'src/bread/bread.module';

@Module({
  controllers: [],
  providers: [ProductService],
  imports: [PrismaModule, BreadModule],
  exports: [ProductService],
})
export class ProductModule { }
