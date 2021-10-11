import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDto } from 'src/feature/user/dtos/create-user.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: CreateUserDto, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;
    await this.mailerService.sendMail({
      to: user.email,

      subject: 'Welcome to the best APP EU, plz confirm your mail ! :)',
      template: './confirmation',
      context: {
        name: user.firstName,
        url,
      },
    });
  }
}
