import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BreadModule } from './bread/bread.module';
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { ProductItemModule } from './product-item/product-item.module';

@Module({
  imports: [
    ProductModule,
    UserModule,
    AuthModule,
    BreadModule,
    ItemModule,
    OrderModule,
    ProductItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
