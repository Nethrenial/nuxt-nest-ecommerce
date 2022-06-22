import {
  Controller,
  Get,
  Post,
  Delete,
  UseGuards,
  Body,
  Req,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { EmailConfirmationGuard } from 'src/authentication/guards/email-confirmation.guard';
import { RequestWithUser } from 'src/authentication/types/request-with-user.types';
import { AddUserAddressDto } from './dto/add-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/getAllUsers')
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async getAllUsers() {
    return 'This action returns all users';
  }

  @Post('/add-user-address')
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async addUserAddress(
    @Req() { user }: RequestWithUser,
    @Body() addressData: AddUserAddressDto,
  ) {
    return this.usersService.addUserAddress(user.id, addressData);
  }

  @Patch('/update-user-address/:addressId')
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async updateUserAddress(
    @Req() { user }: RequestWithUser,
    @Param('addressId', ParseIntPipe) addressId: number,
    @Body() addressData: UpdateUserAddressDto,
  ) {
    return this.usersService.updateUserAddress(user.id, addressId, addressData);
  }

  @Delete('/remove-user-address/:addressId')
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async removeUserAddress(
    @Req() { user }: RequestWithUser,
    @Param('addressId', ParseIntPipe) addressId: number,
  ) {
    return this.usersService.removeUserAddress(user.id, addressId);
  }
}
