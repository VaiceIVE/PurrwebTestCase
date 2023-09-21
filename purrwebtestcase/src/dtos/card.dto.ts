import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CardDto
{
    @ApiProperty({
        description: 'Id of a card that we are going to update',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    @IsNotEmpty()
    id: string

    @ApiProperty({
        description: 'Id of a list that card belongs to',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    @IsNotEmpty()
    list_id: string

    @ApiProperty({
        description: 'New name of a card',
        example:"MyCard",
        type: String,
        required: true
      })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'New Description of a card',
        example:"Kinda good Card",
        type: String,
        required: false
      })
    description?: string
}
