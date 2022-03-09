import { BadRequestException, Injectable } from '@nestjs/common';
import { validId } from 'functions/validId';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService){}

  async create(createOrderDto: CreateOrderDto) {
    return this.prismaService.orders.create({
      data: {
        user_id: Number(createOrderDto.userId),
        value: Number(createOrderDto.value),
      }
    });

  }

  async findAll() {
    return this.prismaService.orders.findMany();
  }

  async findOne(id: number) {

    id = validId(id);

    const order = await this.prismaService.orders.findUnique({
      where: {
        id
      }
    });

    if(!order){
      throw new BadRequestException("Order does not exists");
    }

    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    id = validId(id);
    await this.findOne(id);

    return this.prismaService.orders.update({
      data:{
        user_id: Number(updateOrderDto.userId),
        value: Number(updateOrderDto.value),
      }, where:{
        id,
      }
    });
  }

  async remove(id: number) {

    id = validId(id);

    await this.findOne(id);

    return this.prismaService.orders.delete({
      where:{
        id,
      }
    });
  }
}
