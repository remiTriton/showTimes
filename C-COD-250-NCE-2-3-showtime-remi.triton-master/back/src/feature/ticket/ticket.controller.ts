import {
  NotFoundException,
  Param,
  UseGuards,
  Request,
  Req,
} from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Res } from '@nestjs/common';

import { ticketService } from './ticket.service';
import { createTicketDto } from './dtos/createTicket.dto';
import { ticket } from './schemas/ticket.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tickets')
export class ticketController {
  constructor(private readonly ticketService: ticketService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() createTicketDto: createTicketDto) {
    return this.ticketService.create(req.user.userId, createTicketDto);
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<ticket> {
    return this.ticketService.getById(id);
  }

  @Delete('/:id')
  public async deleteConcert(@Res() res, @Param('id') ticketId: string) {
    if (!ticketId) {
      throw new NotFoundException('Concert ID does not exist');
    }
    const ticket = await this.ticketService.remove(ticketId);

    if (!ticketId) {
      throw new NotFoundException('Concert does not exist');
    }

    return res.status(HttpStatus.OK).json({
      message: 'Concert has been deleted',
      ticket,
    });
  }

  @Get()
  findAll(): Promise<ticket[]> {
    return this.ticketService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/validate/:concert')
  async validateQR(
    @Req() req,
    @Param('concert') concertId: string,
  ): Promise<boolean> {
    return this.ticketService.addSpectator(concertId, req.user.userId);
  }
}
