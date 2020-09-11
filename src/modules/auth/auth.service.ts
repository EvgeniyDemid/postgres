import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { IUserPayloadParams } from './type/IUserPayloadParams';
import { LoginResponseDto } from './dto/loginResponsDto';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
         ){}


    async validateUser(email: string, password: string): Promise<IUserPayloadParams> {
        const user = await this.userService.findByEmail(email);
        if (this.userService.validatePassword(password, user.password)) {
          const {id, email,} = user;
          return {id, email};
        }
    }  
    
    signIn(user:IUserPayloadParams):LoginResponseDto{
        const {id,email}= user;
        const payload ={id, email};
        return {
            accessToken: this.jwtService.sign(payload),
            id,
            email
        }
    }
}
