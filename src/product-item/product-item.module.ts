import { Module } from '@nestjs/common';
import { ProductItemService } from './product-item.service';
import { ProductItemController } from './product-item.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProductItemController],
  providers: [ProductItemService],
  imports: [PrismaModule],
  exports: [ProductItemService],
})
export class ProductItemModule {}
