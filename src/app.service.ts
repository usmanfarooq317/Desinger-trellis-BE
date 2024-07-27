import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  @Get()
  getRoot() {
    return { message: 'Welcome to the Auth API!' };
  }
}