import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    return this.prisma.itens.create({
      data: { ...createItemDto },
    });
  }

  async findAll() {
    return this.prisma.itens.findMany();
  }

  async findOne(id: number) {
    const item = await this.prisma.itens.findUnique({ where: { id } });

    if (item === null) {
      throw new BadRequestException('Item not found');
    }

    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.findOne(id);

    return this.prisma.itens.update({
      data: { ...item, ...updateItemDto },
      where: { id },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.itens.delete({ where: { id } });
  }
}
