import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBreadDto } from './dto/create-bread.dto';
import { UpdateBreadDto } from './dto/update-bread.dto';

@Injectable()
export class BreadService {
  constructor(private prisma: PrismaService) {}

  async create(createBreadDto: CreateBreadDto) {
    return this.prisma.breads.create({
      data: { ...createBreadDto },
    });
  }

  async findAll() {
    return this.prisma.breads.findMany();
  }

  async findOne(id: number) {
    return this.prisma.breads.findUnique({ where: { id } });
  }

  async update(id: number, updateBreadDto: UpdateBreadDto) {
    const bread = await this.findOne(id);

    if (bread === null) {
      throw new BadRequestException('Bread not found');
    }

    return this.prisma.breads.update({
      data: { ...bread, ...updateBreadDto },
      where: { id },
    });
  }

  async remove(id: number) {
    const bread = await this.findOne(id);

    if (bread === null) {
      throw new BadRequestException('Bread not found');
    }

    return this.prisma.breads.delete({ where: { id } });
  }
}
