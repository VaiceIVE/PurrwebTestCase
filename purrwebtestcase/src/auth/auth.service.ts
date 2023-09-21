import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    public constructor(
        private jwtService: JwtService,
    ){}
    public async signup(email: string, password: string)
    {
        const payload = {email: email}
        const salt = 10
        const hash = await bcrypt.hash(password, salt)
        const currentUser = await User.create({email: email, hash_password: hash, username: email.split('@')[0]})
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    public async signin(email: string, password: string)
    {
        const candidate = await User.findOne({where:{email: email}})
        if (!candidate)
        {
            throw new BadRequestException('User with that email not found')
        }
        if (!bcrypt.compare(password, candidate.hash_password))
        {
            throw new BadRequestException('Wrong password')
        }
        const payload = {id: candidate.id, email: candidate.email}
        return {
            access_token: await this.jwtService.signAsync(payload),
        };    
    }
}
