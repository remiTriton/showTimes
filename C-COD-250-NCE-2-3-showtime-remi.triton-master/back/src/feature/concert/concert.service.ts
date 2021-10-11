import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concert, ConcertDocument } from './schemas/concert.schema';
import { UpdateConcertDto } from './dtos/UpdateConcertDto';
import { CreateConcertDto } from './dtos/CreateConcert.dto';

//Important, s'il y a un pb, bien vérifier aussi le controller!//
@Injectable()
export class ConcertService {
  constructor(
    @InjectModel(Concert.name)
    public ConcertModel: Model<ConcertDocument>,
  ) {}

  //Barre de recherche
  async find(options) {
    return this.ConcertModel.find(options).exec();
  }
  //Nouveau concert
  create(createConcertDto: CreateConcertDto) {
    const createdConcert = new this.ConcertModel(createConcertDto);

    return createdConcert.save();
  }
  //Get tous lres concerts
  findAll(): Promise<Concert[]> {
    return this.ConcertModel.find().exec();
  }
  //Get un seul concert
  async getById(id: string) {
    return await this.ConcertModel.findById(id).exec();
  }
  //Update un concert
  public update(concertId: string, updateConcertDto: UpdateConcertDto) {
    console.log('update ', concertId, updateConcertDto);
    return this.ConcertModel.updateOne({ _id: concertId }, updateConcertDto);
  }

  public async updateV2(concertId: string, updateConcertDto: UpdateConcertDto) {
    console.log('update ', concertId, updateConcertDto);
    const res = await this.ConcertModel.updateOne(
      { _id: concertId },
      updateConcertDto,
    );
    console.log(res);
    return res;
  }

  //On pète un concert
  public remove(ConcertId: string) {
    return this.ConcertModel.findByIdAndRemove(ConcertId);
  }
}
