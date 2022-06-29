import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
  IsInt,
  IsJSON,
  IsArray,
} from 'class-validator';
import {
  IsFiles,
  IsFile,
  HasMimeType,
  MemoryStoredFile,
} from 'nestjs-form-data';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsFiles()
  @HasMimeType(['image/png', 'image/jpeg', 'image/webp'], { each: true })
  images: MemoryStoredFile[];

  @IsOptional()
  @IsFile()
  @HasMimeType(['video/mp4'])
  video: MemoryStoredFile;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  discount: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsNumber()
  @IsInt()
  stock: number;

  @IsNumber()
  @IsInt()
  sold: number;

  @IsJSON()
  @IsOptional()
  specifications: string;

  @IsArray()
  @IsNumber({}, { each: true })
  categories: number[];
}
