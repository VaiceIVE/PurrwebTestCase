import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { UserUpdateDto } from 'src/dtos/userUpdate.dto';
import { UserDto } from 'src/dtos/user.dto';
import { UserCreateDto } from 'src/dtos/userCreate.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserGuard } from './user.guard';

@ApiTags('TrelloAPI')
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
    ){}

    @ApiResponse({
        description: "User",
        type: UserDto
    })
    @Get(':id')
    public async getOne(@Param('id') id: string): Promise<UserDto>
    {
        try {
            return await this.userService.getById(id) as UserDto;
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
    @ApiResponse({
        description: "User",
        type: [UserDto]
    })
    @Get()
    public async getAllUsers(): Promise<UserDto[]>
    {
        try {
            return await this.userService.getAll() as UserDto[]
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: UserDto,
      })
    @Post()
    public async createOne(@Body() signInDto: UserCreateDto)
    {
        return await this.authService.signup(signInDto.email, signInDto.password);
    }

    @ApiResponse({
        description: "User successfully updated"
    })
    @UseGuards(UserGuard)
    @Post(':id')
    public async updateUser(@Param('id') userId: string, @Body() userDto: UserUpdateDto)
    {
        userDto.id = userId
        try
        {
            await this.userService.updateById(userDto)
            return "User successfully updated"
        }
        catch
        {
            throw new InternalServerErrorException()
        }
    }
    @ApiResponse({
        description: "User successfully deleted"
    })
    @UseGuards(UserGuard)
    @Delete(':id')
    public async deleteOneUser(@Param('id') userId: string)
    {
        try {
            await this.userService.deleteById(userId)
            return "User successfully deleted"
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}
