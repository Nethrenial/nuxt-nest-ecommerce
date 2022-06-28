import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService, UsersAddressesService } from '../services';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { EmailConfirmationGuard } from 'src/authentication/guards/email-confirmation.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersAddressesService: UsersAddressesService,
  ) {}

  @Get()
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async getAllUsers() {
    return 'This action returns all users';
  }
}
