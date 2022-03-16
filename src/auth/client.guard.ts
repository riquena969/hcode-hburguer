import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class ClientGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const authorization = request.headers['authorization'];
      const token = authorization.split(' ')[1];

      if (!token) {
        throw new BadRequestException('Token is required');
      }

      request.auth = await this.authService.decodeToken(token);

      return request.auth.user_type === 'client';
    } catch (e) {
      return false;
    }
  }
}
