import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CardCreateDto
{
    @ApiProperty({
        description: 'Id of a List for new Card',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    list_id: string

    @ApiProperty({
        description: 'Card Name',
        example:"Best Card",
        type: String,
        required: true
      })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'Description of a card, if needed',
        example:"CardCard",
        type: String,
        required: false
      })
    description?: string

}
