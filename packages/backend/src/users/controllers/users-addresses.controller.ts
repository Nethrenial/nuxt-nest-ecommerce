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
import { UsersAddressesService } from '../services';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { EmailConfirmationGuard } from 'src/authentication/guards/email-confirmation.guard';
import { RequestWithUser } from 'src/authentication/types/request-with-user.types';
import { AddUserAddressDto } from '../dto/add-user-address.dto';
import { UpdateUserAddressDto } from '../dto/update-user-address.dto';

@Controller('users/addresses')
export class UsersAddressesController {
  constructor(private readonly usersAddressesService: UsersAddressesService) {}

  @Get()
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async getAllUserAddresses(@Req() { user }: RequestWithUser) {
    return this.usersAddressesService.getUserAddresses(user.id);
  }

  @Get('/:addressId')
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async getUserAddressById(
    @Param('addressId', ParseIntPipe) addressId: number,
  ) {
    return this.usersAddressesService.getUserAddressById(addressId);
  }

  @Post()
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async addUserAddress(
    @Req() { user }: RequestWithUser,
    @Body() addressData: AddUserAddressDto,
  ) {
    return this.usersAddressesService.addUserAddress(user.id, addressData);
  }

  @Patch('/:addressId')
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async updateUserAddress(
    @Req() { user }: RequestWithUser,
    @Param('addressId', ParseIntPipe) addressId: number,
    @Body() addressData: UpdateUserAddressDto,
  ) {
    return this.usersAddressesService.updateUserAddress(
      user.id,
      addressId,
      addressData,
    );
  }

  @Delete('/:addressId')
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async removeUserAddress(
    @Req() { user }: RequestWithUser,
    @Param('addressId', ParseIntPipe) addressId: number,
  ) {
    return this.usersAddressesService.removeUserAddress(user.id, addressId);
  }
}
