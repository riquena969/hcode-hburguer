import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);

    const checked = await bcrypt.compare(loginDto.password, user.password);

    if (!checked) {
      throw new UnauthorizedException('Email or password is incorrect');
    }

    const token = await this.getToken(user.id);

    return {
      token,
    };
  }

  async decodeToken(token: string) {
    try {
      await this.jwtService.verify(token);
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }

    return this.jwtService.decode(token);
  }

  async getToken(userId: number) {
    const { id, name, email, user_type } = await this.userService.findOne(
      userId,
    );

    return this.jwtService.sign({ id, name, email, user_type });
  }
}
