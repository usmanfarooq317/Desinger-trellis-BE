import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

  export class CreateUserDto {
    @ApiProperty()
    @IsString()
    email: string;
  
    @ApiProperty()
    @IsString()
    password: string;
  
    @ApiProperty()
    @IsString()
    firstName: string;
  
    @ApiProperty()
    @IsString()
    lastName: string;
  
    @ApiProperty()
    @IsString()
    firmName: string;
  
    @ApiProperty()
    @IsString()
    contact: string;
  
    @ApiProperty()
    @IsNumber()
    numOfEmployees: number;
  }