import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, Length } from "class-validator"

export class UserCreateDto
{
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
        description: 'User password',
        example: "12345678",
        type: String,
        required: true
      })
    @IsNotEmpty()
    @Length(8)
    password: string
}