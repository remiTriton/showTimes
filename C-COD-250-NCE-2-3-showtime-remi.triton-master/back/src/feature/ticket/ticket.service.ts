import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateConcertDto } from '../concert/dtos/UpdateConcertDto';
import { Concert } from '../concert/schemas/concert.schema';
import { createTicketDto } from './dtos/createTicket.dto';
import { ticket, ticketDocument } from './schemas/ticket.schema';

@Injectable()
export class ticketService {
  constructor(
    @InjectModel(ticket.name)
    private readonly ticketModel: Model<ticketDocument>,
    @InjectModel(Concert.name)
    private readonly concertModel: Model<ticketDocument>,
  ) {}
  create(userId: string, createTicketDto: createTicketDto) {
    console.log({ ...createTicketDto, userId });
    const newticket = new this.ticketModel({ ...createTicketDto, userId });
    return newticket.save();
  }
  findAll(): Promise<ticket[]> {
    return this.ticketModel.find().exec();
  }
  remove(ticketid: string) {
    return this.ticketModel.findByIdAndRemove(ticketid);
  }

  async getById(id: string): Promise<ticket> {
    return await this.ticketModel.findById(id).exec();
  }

  async addSpectator(ticketId: string, userId: string) {
    console.log(ticketId);
    console.log(userId);
    const ticket = await this.getById(ticketId);
    console.log(ticket);
    //console.log('update ', concertId, updateConcertDto);
    await this.concertModel.updateOne(
      { _id: ticket.concert },
      { $push: { spectators: userId } },
      { new: true, upsert: true },
    );

    return true;
  }
}
