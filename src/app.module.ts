import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BreadModule } from './bread/bread.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [UserModule, AuthModule, BreadModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
