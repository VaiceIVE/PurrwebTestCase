import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UserDto
{
    @ApiProperty({
        description: 'Id of a user',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
    })
    @IsNotEmpty()
    @IsString()
    id: string

    @ApiProperty({
        description: 'User email',
        example:"my@mail.ru",
        type: String,
        required: true
    })
    @IsEmail()
    @IsNotEmpty() 
    email: string
    @ApiProperty({
        description: 'Username',
        example:"iamsomeuser",
        type: String,
        required: true
    })
    username: string
}
