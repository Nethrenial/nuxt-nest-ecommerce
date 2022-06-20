import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersService } from 'src/users/users.service';
@Module({
  providers: [AuthenticationService, UsersService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
