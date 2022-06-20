import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import * as Mail from 'nodemailer/lib/mailer';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendMail(@Body() data: Mail.Options) {
    await this.emailService.sendMail(data);
    return 'Email sent';
  }
}
