import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { StripePaymentsService } from './stripe-payments.service';
import { CreateChargeDto } from './dto/create-charge.dto';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { RequestWithUser } from 'src/authentication/types/request-with-user.types';

@Controller('charge')
export class StripePaymentsController {
  constructor(private readonly stripePaymentsService: StripePaymentsService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createCharge(
    @Body() charge: CreateChargeDto,
    @Req() request: RequestWithUser,
  ) {
    await this.stripePaymentsService.charge(
      charge.amount,
      charge.paymentMethodId,
      request.user.stripeCustomerId,
    );
  }
}
