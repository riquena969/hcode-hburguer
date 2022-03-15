import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BreadModule } from 'src/bread/bread.module';
import { ProductModule } from 'src/product/product.module';
import { ProductItemModule } from 'src/product-item/product-item.module';
import { ItemModule } from 'src/item/item.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
    PrismaModule,
    BreadModule,
    ItemModule,
    ProductModule,
    ProductItemModule,
  ],
})
export class OrderModule {}
