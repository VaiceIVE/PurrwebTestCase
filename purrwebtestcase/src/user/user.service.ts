import { Injectable } from '@nestjs/common';
import { UserUpdateDto } from 'src/dtos/userUpdate.dto';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService{

    public async getAll()
    {
        return await User.findAll(); 
    }

    public async getByEmail(email: string)
    {
        return await User.findOne({where: {email: email}});
    }

    public async getById(id: string)
    {
        return await User.findByPk(id);
    }

    public async updateById(userDto: UserUpdateDto)
    {
        if (userDto.new_password)
        {
            const salt = 10
            const hash = await bcrypt.hash(userDto.new_password, salt)
            userDto.hash_password = hash
        }
        return await User.update(userDto, {where: {id: userDto.id}})
    }

    public async deleteById(userId: string)
    {
        return await User.destroy({where: {id: userId}})
    }
}
