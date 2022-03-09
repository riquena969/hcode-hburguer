import { BadRequestException, Injectable } from '@nestjs/common';
import { BreadService } from 'src/bread/bread.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

  constructor(private prismaService: PrismaService, private breadService: BreadService) { }

  create(createProductDto: CreateProductDto) {
    const idBead = Number(createProductDto.order_id);
    const bread = this.breadService.findOne(idBead);
    return this.prismaService.products.create({
      data: {
        value: Number(createProductDto.value),
        order_id: Number(createProductDto.order_id),
        bread_id: Number(createProductDto.bread_id),
      }
    })
  }

  findAll() {
    return this.prismaService.products.findMany();
  }

  async findOne(id: number) {
    const item = await this.prismaService.products.findUnique({ where: { id } });

    if (item === null) {
      throw new BadRequestException('Product not found');
    }

    return item;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);

    return this.prismaService.products.update({
      data: { ...product, ...updateProductDto },
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
