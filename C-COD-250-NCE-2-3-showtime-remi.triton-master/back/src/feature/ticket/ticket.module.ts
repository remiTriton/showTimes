import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Concert, ConcertSchema } from '../concert/schemas/concert.schema';
import { ticket, ticketSchema } from './schemas/ticket.schema';
import { ticketController } from './ticket.controller';
import { ticketService } from './ticket.service';

@Module({
  controllers: [ticketController],
  imports: [
    MongooseModule.forFeature([
      { name: ticket.name, schema: ticketSchema },
      { name: Concert.name, schema: ConcertSchema },
    ]),
  ],
  providers: [ticketService],
  exports: [ticketService],
})
export class ticketModule {}
