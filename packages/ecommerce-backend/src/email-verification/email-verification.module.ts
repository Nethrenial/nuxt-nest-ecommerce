import { Module } from '@nestjs/common';
import { EmailVerificationService } from './email-verification.service';
import { EmailModule } from 'src/email/email.module';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { EmailVerificationController } from './email-verification.controller';

@Module({
  imports: [UsersModule, EmailModule, JwtModule, ConfigModule],
  providers: [EmailVerificationService],
  exports: [EmailVerificationService],
  controllers: [EmailVerificationController],
})
export class EmailVerificationModule {}
