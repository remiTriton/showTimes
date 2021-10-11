import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Concert, ConcertSchema } from './schemas/concert.schema';
import { ConcertController } from './concert.controller';
import { ConcertService } from './concert.service';

@Module({
  controllers: [ConcertController],
  imports: [
    MongooseModule.forFeature([{ name: Concert.name, schema: ConcertSchema }]),
  ],
  providers: [ConcertService],
  exports: [ConcertService],
})
export class ConcertModule {}
