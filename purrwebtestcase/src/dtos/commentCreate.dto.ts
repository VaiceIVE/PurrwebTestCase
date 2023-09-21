import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional } from "class-validator"

export class CommentCreateDto
{
    @ApiProperty({
        description: 'Id of user that owns a comment',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String
      })
    @IsNotEmpty()
    @IsOptional()
    owner_id: string
    @ApiProperty({
        description: 'Id of a card that comment belongs to',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String
      })
    @IsNotEmpty()
    @IsOptional()
    card_id: string
    @ApiProperty({
        description: 'Message of a comment',
        example:"Potats",
        type: String
      })
    @IsNotEmpty()
    message: string
}
