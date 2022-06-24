import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserAddressDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  address?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  city?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  state?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  country?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  zip?: string;
}
