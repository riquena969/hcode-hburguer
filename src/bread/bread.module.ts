import { Module } from '@nestjs/common';
import { BreadService } from './bread.service';
import { BreadController } from './bread.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BreadController],
  providers: [BreadService],
  imports: [PrismaModule],
})
export class BreadModule {}
