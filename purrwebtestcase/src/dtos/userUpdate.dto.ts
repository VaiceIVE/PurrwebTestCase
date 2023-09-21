import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, Length } from "class-validator"

export class UserUpdateDto
{
    id?: string
    @ApiProperty({
        description: 'User email',
        example:"my@mail.ru",
        type: String,
        required: false
      })
    email?: string
    @ApiProperty({
        description: 'Username',
        example:"iamsomeuser",
        type: String,
        required: false
      })
    username?: string
    @ApiProperty({
        description: 'User`s new password',
        example: "12345678",
        type: String,
        required: false
      })
    @IsOptional()
    @Length(8)
    new_password?: string
    hash_password?: string
    is_verified?: boolean
}