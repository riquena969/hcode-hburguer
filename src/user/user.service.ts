import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);

    const userCreated = await this.prisma.users.create({
      data: { ...createUserDto, user_type: createUserDto.userType },
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
    const user = await this.prisma.users.findUnique({ where: { id } });

    delete user.password;

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = bcrypt.hashSync(updateUserDto.password, 10);
    }

    const user = await this.prisma.users.update({ where: { id }, data: { ...updateUserDto } })

    delete user.password;

    return user;
  }

  async remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
