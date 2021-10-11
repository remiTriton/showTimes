import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { ConcertService } from './concert.service';
import { CreateConcertDto } from './dtos/CreateConcert.dto';
import { Concert } from './schemas/concert.schema';
import { UpdateConcertDto } from './dtos/UpdateConcertDto';
import { Request } from 'express';

@Controller('Concerts')
export class ConcertController {
  private Update_concertDto: UpdateConcertDto;
  constructor(private readonly ConcertService: ConcertService) {}
  @Post()
  create(@Body() createConcertDto: CreateConcertDto) {
    return this.ConcertService.create(createConcertDto);
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Concert> {
    return this.ConcertService.getById(id);
  }
  @Put('/:id')
  update( @Param('id') concertId: string, @Body() updateConcertDto: UpdateConcertDto,
  ) {
    return this.ConcertService.update(concertId, updateConcertDto);
  }
  @Delete('/:id')
  public async deleteConcert(@Res() res, @Param('id') concertId: string) {
    if (!concertId) {
      throw new NotFoundException('Concert ID does not exist');
    }

    const concert = await this.ConcertService.remove(concertId);

    if (!concert) {
      throw new NotFoundException('Concert does not exist');
    }

    return res.status(HttpStatus.OK).json({
      message: 'Concert has been deleted',
      concert,
    });
  }
  @Get()
  public async filterByGenre(@Req() req: Request) {
    let options = {};
    if (req.query.s) {
      options = {
        $or: [
          { group_name: new RegExp(req.query.s.toString(), 'i') },
          { gender: new RegExp(req.query.s.toString(), 'i') },
          { price: new RegExp(req.query.s.toString(), 'i') },
        ],
      };
    }
    const data = this.ConcertService.find(options);
    return data;
  }

  @Get()
  findAll(): Promise<Concert[]> {
    return this.ConcertService.findAll();
  }
}
