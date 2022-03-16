import { BadRequestException, Injectable } from '@nestjs/common';
import { validId } from 'functions/validId';
import { BreadService } from 'src/bread/bread.service';
import { ItemService } from 'src/item/item.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductItemService } from 'src/product-item/product-item.service';
import { ProductService } from 'src/product/product.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    private prismaService: PrismaService,
    private breadService: BreadService,
    private itemService: ItemService,
    private productService: ProductService,
    private productItemService: ProductItemService,
  ) {}

  async create(userId: string, createOrderDto: CreateOrderDto) {
    const order = await this.prismaService.orders.create({
      data: {
        user_id: parseInt(userId),
        value: 0,
      },
    });

    const products = await Promise.all(
      createOrderDto.products.map(async (product: CreateOrderProductDto) => {
        const bread = await this.breadService.findOne(parseInt(product.bread));
        let productValue: number = bread.value.toNumber();

        const productCreated = await this.productService.create({
          bread_id: parseInt(product.bread),
          order_id: order.id,
          value: 0,
        });

        const itens = await Promise.all(
          product.itens.map(async (itemId: number) => {
            const item = await this.itemService.findOne(itemId);

            const itemCreated = await this.productItemService.create({
              product_id: productCreated.id,
              item_id: itemId,
              value: item.value.toNumber(),
            });

            return itemCreated.value.toNumber();
          }),
        );

        productValue += itens.reduce((prev: number, cur: number) => {
          return prev + cur;
        });

        this.productService.update(productCreated.id, { value: productValue });

        return productValue;
      }),
    );

    const totalValue = products.reduce((prev: number, cur: number) => {
      return prev + cur;
    });

    return this.prismaService.orders.update({
      where: { id: order.id },
      data: { value: totalValue },
    });
  }

  async findAll() {
    return this.prismaService.orders.findMany();
  }

  async findOne(id: number) {
    id = validId(id);

    const order = await this.prismaService.orders.findUnique({
      where: {
        id,
      },
      include: {
        products: {
          include: {
            breads: true,
            product_itens: {
              include: {
                itens: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      throw new BadRequestException('Order does not exists');
    }

    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    // id = validId(id);
    // await this.findOne(id);
    // return this.prismaService.orders.update({
    //   data: {
    //     user_id: Number(updateOrderDto.userId),
    //     value: Number(updateOrderDto.value),
    //   }, where: {
    //     id,
    //   }
    // });
  }

  async remove(id: number) {
    id = validId(id);

    await this.findOne(id);

    return this.prismaService.orders.delete({
      where: {
        id,
      },
    });
  }
}
