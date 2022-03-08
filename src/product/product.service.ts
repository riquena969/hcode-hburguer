import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

    constructor(private prisma: PrismaService) {}

        async create(createProductDto: CreateProductDto) {
            return this.prisma.create({
              data: { 
                name: createProductDto.name,
                value: Number(createProductDto.value),
               },
            });
          }
        

        async findAll() {
            return this.prisma.products.findMany();
          }
        
          async findOne(id: number) {
            const product = await this.prisma.products.findUnique({ where: { id } });
        
            if (product === null) {
              throw new BadRequestException('Bread not found');
            }
        
            return product;
          }
    }

    /*async update(id: number, updateProductDto: UpdateProductDto) {
        const bread = await this.findOne(id);
    
        return this.prisma.products.update({
          data: { ...product, ...updateProductDto },
          where: { id },
        });
      }
    
      async remove(id: number) {
        await this.findOne(id);
    
        return this.prisma.products.delete({ where: { id } });
      }*/
    
function remove(id: any, number: any) {
    throw new Error('Function not implemented.');
}

