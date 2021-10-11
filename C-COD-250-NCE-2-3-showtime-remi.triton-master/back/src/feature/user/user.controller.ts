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
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './schemas/user.schema';
import { Admin } from './schemas/admin.schema';
import updateUserDTO from './dtos/update-user.dto';

@Controller('users')
export class UserController {
  constructor(public readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Put('/:id')
  public async update(
    @Param('id') userId: string,
    @Body() updateUserDTO: updateUserDTO,
  ) {
    return await this.userService.update(userId, updateUserDTO);
  }

  @Delete('/:id')
  public async deleteConcert(@Res() res, @Param('id') UserId: string) {
    if (!UserId) {
      throw new NotFoundException('User ID does not exist');
    }
    const user = await this.userService.remove(UserId);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted',
      user,
    });
  }
  @Get('/:id')
  checkIsAdmin(@Param('id') id: string): Promise<Admin> {
    return this.userService.isUserAdmin({ userId: id });
  }

  @Post('register')
  async register(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return this.userService.register(
      CreateUserDto.firstName,
      CreateUserDto.lastName,
      CreateUserDto.email,
      CreateUserDto.password,
    );
  }
}
