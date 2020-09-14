import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {AuthService} from '../auth.service';
import { ConfigService } from '@nestjs/config';
import { IUserPayloadParams } from '../type/IUserPayloadParams';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('access_token'),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
      passReqToCallback: true
    });
  }

  async validate(payload: IUserPayloadParams): Promise<IUserPayloadParams> {
        return payload;
  }
}
