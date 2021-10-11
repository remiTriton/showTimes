import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/feature/user/schemas/user.schema';

export type ConcertDocument = Concert & Document;

@Schema()
export class Concert {
  @Prop({ required: true })
  group_name: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  place: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: false })
  spectators: Array<User>;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);
//relation entre les tables User et Concerts
