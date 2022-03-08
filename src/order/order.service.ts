import { Injectable } from '@nestjs/common';
import { validId } from 'functions/validId';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService){}

  async create(createOrderDto: CreateOrderDto) {
    return "";
    // this.prismaService.orders.create({
    //   data: { ...createOrderDto }
    // });
  }

  async findAll() {
    return this.prismaService.orders.findMany();
  }

  async findOne(id: number) {

    id = validId(id);

    return this.prismaService.orders.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {

    id = validId(id);

    return this.prismaService.orders.delete({
      where:{
        id,
      }
    });
  }
}
