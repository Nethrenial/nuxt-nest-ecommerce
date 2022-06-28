import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';

@Module({
  imports: [NestjsFormDataModule, ConfigModule],
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}
