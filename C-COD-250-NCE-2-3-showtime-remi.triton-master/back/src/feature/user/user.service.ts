import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CheckAdminUserDto } from './dtos/ChecckAdminUser.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { User, UserDocument } from './schemas/user.schema';
import updateUserDTO from './dtos/update-user.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Admin.name) private readonly adminModel: Model<AdminDocument>,
    private mailService: MailService,
  ) { }

  public async update(userId: string, updateUserDTO: updateUserDTO) {
    console.log('update ', userId, updateUserDTO);
    return await this.userModel
      .updateOne({ _id: userId }, updateUserDTO)
      .exec();
  }
  async isUserAdmin(checkAdminUserDto: CheckAdminUserDto): Promise<Admin> {
    const user = await this.userModel.findById(checkAdminUserDto.userId).exec();
    return this.adminModel.findOne({ user }).exec();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }
  public remove(UserId: string) {
    return this.userModel.findByIdAndRemove(UserId);
  }
  async create(CreateUserDto: CreateUserDto): Promise<User> {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    const createdUser = new this.userModel(CreateUserDto);
    await this.mailService.sendUserConfirmation(createdUser, token);
    return createdUser.save();
  }

  async register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<User> {
    return this.create({
      firstName,
      lastName,
      email,
      password,
    });
  }
}
