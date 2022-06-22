import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { StripePaymentsModule } from 'src/stripe-payments/stripe-payments.module';

@Module({
  imports: [StripePaymentsModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
