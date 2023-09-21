import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserCreateDto } from 'src/dtos/userCreate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('TrelloAPI')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService
        ){}
        
    @Post('signin')
    public async signin(@Body() signInDto: UserCreateDto)
    {
        return await this.authService.signin(signInDto.email, signInDto.password)
    }
}
