import { Module } from '@nestjs/common';
import { StripePaymentsService } from './stripe-payments.service';
import { StripePaymentsController } from './stripe-payments.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [StripePaymentsService],
  controllers: [StripePaymentsController],
  exports: [StripePaymentsService],
})
export class StripePaymentsModule {}
