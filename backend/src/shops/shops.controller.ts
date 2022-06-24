import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { EmailConfirmationGuard } from 'src/authentication/guards/email-confirmation.guard';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { RequestWithUser } from 'src/authentication/types/request-with-user.types';
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ShopOpenRequestDto } from './dto/shop-open-request.dto';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  @Post('/open-request')
  create(@Req() { user }: RequestWithUser, @Body() data: ShopOpenRequestDto) {
    return this.shopsService.sendAShopOpenRequest(user.id, data);
  }

  @Get()
  findAll() {
    return this.shopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    return this.shopsService.update(+id, updateShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopsService.remove(+id);
  }
}
