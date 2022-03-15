import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductItemService {
  constructor(private prisma: PrismaService) {}

  async create(data: { product_id: number; item_id: number; value: number }) {
    return this.prisma.product_itens.create({ data });
  }
}
