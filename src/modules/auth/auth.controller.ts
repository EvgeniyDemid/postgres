import { Controller, UseGuards, Post,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginResponseDto } from './dto/loginResponsDto';
import { IUserPayloadParams } from './type/IUserPayloadParams';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
      ) {
      }
    
      @UseGuards(AuthGuard('local'))
      @Post()
      async signIn(@Request() req: {user: IUserPayloadParams}): Promise<LoginResponseDto> {
        const result = await this.authService.signIn(req.user);
        return result;
      }

}
