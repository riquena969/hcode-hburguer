import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BreadModule } from './bread/bread.module';

@Module({
  imports: [UserModule, AuthModule, BreadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
