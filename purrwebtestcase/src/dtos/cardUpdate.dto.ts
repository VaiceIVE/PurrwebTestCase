import { ApiProperty } from "@nestjs/swagger"

export class CardUpdateDto
{
    @ApiProperty({
        description: 'Id of a card that we are going to update',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    id: string

    @ApiProperty({
        description: 'Id of a list that card belongs to',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: false
      })
    list_id?: string

    @ApiProperty({
        description: 'New name of a card',
        example:"MyCard",
        type: String,
        required: false
      })
    name?: string

    @ApiProperty({
        description: 'New Description of a card',
        example:"Kinda good Card",
        type: String,
        required: false
      })
    description?: string

}
