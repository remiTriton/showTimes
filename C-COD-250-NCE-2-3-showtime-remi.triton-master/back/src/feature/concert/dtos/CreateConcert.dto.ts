import { User } from 'src/feature/user/schemas/user.schema';
import { CreateUserDto } from '../../user/dtos/create-user.dto';
import { CursorConnection } from '@nestjs-query/query-graphql';

@CursorConnection('user', () => CreateUserDto)
export class CreateConcertDto {
  readonly group_name: string;
  readonly date: string;
  readonly place: string;
  readonly genre: string;
  readonly price: string;
  spectators: Array<User>;
}
