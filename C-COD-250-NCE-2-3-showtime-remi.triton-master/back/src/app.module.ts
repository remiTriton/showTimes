import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcertModule } from './feature/concert/concert.module';
import { UserModule } from './feature/user/user.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { ticketModule } from './feature/ticket/ticket.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://adminJ:volvol@cluster0.i1o3l.mongodb.net/showtime?retryWrites=true&w=majority',
    ),
    UserModule,
    ConcertModule,
    MailModule,
    AuthModule,
    ticketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
