import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
  imports: [PrismaModule, AuthModule],
  exports: [ItemService],
})
export class ItemModule {}
