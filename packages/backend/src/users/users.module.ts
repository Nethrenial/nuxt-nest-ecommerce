import { Module } from '@nestjs/common';
import { UsersService, UsersAddressesService } from './services';
import { UsersAddressesController, UsersController } from './controllers';
import { StripePaymentsModule } from 'src/stripe-payments/stripe-payments.module';

@Module({
  imports: [StripePaymentsModule],
  providers: [UsersService, UsersAddressesService],
  controllers: [UsersController, UsersAddressesController],
  exports: [UsersService, UsersAddressesService],
})
export class UsersModule {}
