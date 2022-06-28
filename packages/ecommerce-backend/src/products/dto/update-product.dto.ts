import { PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import {
  HasMimeType,
  IsFile,
  IsFiles,
  MemoryStoredFile,
} from 'nestjs-form-data';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsFiles()
  @HasMimeType(['image/png', 'image/jpeg', 'image/webp'], { each: true })
  images: MemoryStoredFile[];

  @IsOptional()
  @IsFile()
  @HasMimeType(['video/mp4'])
  video: MemoryStoredFile;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  discount: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  currency: string;

  @IsNumber()
  @IsOptional()
  @IsInt()
  stock: number;

  @IsOptional()
  @IsNumber()
  @IsInt()
  sold: number;

  @IsOptional()
  @IsJSON()
  @IsOptional()
  specifications: string;
}
