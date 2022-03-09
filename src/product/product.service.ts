import { Injectable } from '@nestjs/common';
import { BreadService } from 'src/bread/bread.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

  constructor(private prismaService: PrismaService, private breadService: BreadService){}

  create(createProductDto: CreateProductDto) {
    const idBead = Number(createProductDto.order_id);
    const bread = this.breadService.findOne(idBead);
    return this.prismaService.products.create({
      data:{
        value: Number(createProductDto.value),
        order_id: Number(createProductDto.order_id),
        bread_id: Number(createProductDto.bread_id),
      }
    })
  }

  findAll() {
    return this.prismaService.products.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
