import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/getAllUsers')
  @UseGuards(JwtAuthenticationGuard)
  async getAllUsers() {
    return 'This action returns all users';
  }
}
