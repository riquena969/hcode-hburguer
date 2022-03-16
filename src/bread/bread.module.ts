import { Module } from '@nestjs/common';
import { BreadService } from './bread.service';
import { BreadController } from './bread.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [BreadController],
  providers: [BreadService],
  imports: [PrismaModule, AuthModule],
  exports: [BreadService],
})
export class BreadModule {}
