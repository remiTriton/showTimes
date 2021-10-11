import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../feature/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  readonly logger = new Logger('AuthService');

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && user.password === password) {
      //const { password, ...result } = user;
      return { email: user.email, _id: user._id };
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, _id: user._id.toString() };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: 60 * 60 * 24 * 5,
        subject: payload._id,
      }),
    };
  }
  async logout() {
    return {
      access_token: null,
    };
  }
}
