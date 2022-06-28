import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  ParseIntPipe,
} from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { EmailConfirmationGuard } from 'src/authentication/guards/email-confirmation.guard';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { RoleGuard } from 'src/authentication/guards/role.guard';
import { RequestWithUser } from 'src/authentication/types/request-with-user.types';
import { ShopsService } from './shops.service';
// import { CreateShopDto } from './dto/create-shop.dto';
// import { UpdateShopDto } from './dto/update-shop.dto';
import { ShopOpenRequestDto } from './dto/shop-open-request.dto';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  @FormDataRequest()
  @Post('/open-requests')
  create(@Req() { user }: RequestWithUser, @Body() data: ShopOpenRequestDto) {
    return this.shopsService.sendAShopOpenRequest(user.id, data);
  }

  @UseGuards(RoleGuard('Admin'))
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  @Get('/open-requests/all')
  getAllShopOpenRequests() {
    return this.shopsService.getAllShopOpenRequests();
  }

  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  @Get('/open-requests')
  getUserShopOpenRequest(@Req() { user }: RequestWithUser) {
    return this.shopsService.getUserShopOpenRequest(user.id);
  }

  @UseGuards(RoleGuard('Admin'))
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  @Post('/open-requests/:requestId')
  approveShopOpenRequests(@Param('requestId', ParseIntPipe) requestId: number) {
    return this.shopsService.approveShopOpenRequest(requestId);
  }
}
