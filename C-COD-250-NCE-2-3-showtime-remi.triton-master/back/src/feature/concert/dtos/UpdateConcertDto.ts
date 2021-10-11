import { CursorConnection } from '@nestjs-query/query-graphql';
import { CreateUserDto } from '../../user/dtos/create-user.dto';

@CursorConnection('user', () => CreateUserDto)
export class UpdateConcertDto {
  readonly group_name: string;
  readonly date: string;
  readonly place: string;
  readonly price: string;
  readonly genre: string;
}
