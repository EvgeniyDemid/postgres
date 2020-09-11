import {PassportStrategy} from '@nestjs/passport';
import {Injectable, HttpException, HttpStatus} from '@nestjs/common';
import {Strategy} from 'passport-local';
import {AuthService} from '../auth.service';
import { IUserPayloadParams } from '../type/IUserPayloadParams';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({usernameField: 'email', passwordField: 'password'});
  }

  async validate(username: string, password: string): Promise<IUserPayloadParams> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new HttpException(
        'Пользователь не найден ',
        HttpStatus.CONFLICT)
    }
    return user;
  }
}
