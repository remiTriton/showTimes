import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/feature/user/schemas/user.schema';

export type ticketDocument = ticket & Document;

@Schema()
export class ticket {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  concert: string;
}

export const ticketSchema = SchemaFactory.createForClass(ticket);
