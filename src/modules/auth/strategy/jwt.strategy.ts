// import {ConfigService} from '@modules/config/config.service';
// import {PassportStrategy} from '@nestjs/passport';
// import {Injectable} from '@nestjs/common';
// import {ExtractJwt, Strategy} from 'passport-jwt';
// import {AuthService} from '../auth.service';
// import {IUserPayloadParams as IUserPayload} from '../type/IUserPayload';
// import {Headers} from '../dto/headers.dto';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     private readonly configService: ConfigService,
//     private readonly authService: AuthService
//   ) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: configService.config.JWT_SECRET,
//       passReqToCallback: true
//     });
//   }

//   async validate(request: Request, payload: IUserPayload): Promise<IUserPayload | undefined> {
//     const headers = request.headers as Headers;
//     const tokenBlacklisted = await this.authService.tokenBlacklisted(headers.Authorization);
//     if (!tokenBlacklisted) {
//       const user = await this.authService.validateUserById(payload.id);
//       return {
//         id: user.id,
//         email: user.email,
//         userName: user.userName,
//         roles: user.roles
//       };
//     }
//   }
// }
