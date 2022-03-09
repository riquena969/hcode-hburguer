import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BreadService } from 'src/bread/bread.service';

@Module({
  imports: [PrismaModule, BreadService],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
