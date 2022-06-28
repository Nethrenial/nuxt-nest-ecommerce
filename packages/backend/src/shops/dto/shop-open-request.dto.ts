import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import {
  IsFiles,
  IsFile,
  HasMimeType,
  MemoryStoredFile,
} from 'nestjs-form-data';

export class ShopOpenRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsFile()
  @HasMimeType(['image/png', 'image/jpeg', 'image/webp'])
  coverPhoto: MemoryStoredFile;

  @IsFile()
  @HasMimeType(['image/png', 'image/jpeg', 'image/webp'])
  logo: MemoryStoredFile;

  @IsFiles()
  @HasMimeType(['application/pdf'], { each: true })
  businessDocuments: MemoryStoredFile[];

  @IsEmail()
  contactEmail: string;

  @IsNotEmpty()
  @IsString()
  contactPhone: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  zip: string;
}
