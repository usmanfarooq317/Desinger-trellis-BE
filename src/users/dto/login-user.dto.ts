import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

  export class LoginUserDto {
    @ApiProperty()
    @IsString()
    email: string;
  
    @ApiProperty()
    @IsString()
    password: string;
  }