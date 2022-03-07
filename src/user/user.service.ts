import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { validId } from 'functions/validId';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);

    const userCreated = await this.prisma.users.create({
      data: { ...createUserDto },
    });

    delete userCreated.password;

    return userCreated;
  }

  findAll() {
    return this.prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        street: true,
        number: true,
        complement: true,
        district: true,
        city: true,
        uf: true,
        zipcode: true,
        user_type: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: number) {
    id = validId(id);
    const user = await this.prisma.users.findUnique({ where: { id } });

    if(!user){
      throw new BadRequestException('User not found');
    }

    delete user.password;

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.users.findFirst({ where: { email } });

    if (user === null) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    id = validId(id);
    await this.findOne(id);
    if (updateUserDto.password) {
      updateUserDto.password = bcrypt.hashSync(updateUserDto.password, 10);
    }

    const user = await this.prisma.users.update({
      where: { id },
      data: { ...updateUserDto },
    });

    delete user.password;

    return user;
  }

  async remove(id: number) {
    id = validId(id);

    await this.findOne(id);

    return this.prisma.users.delete({ where: { id } });
  }
}
