import { ApiProperty } from "@nestjs/swagger"

export class ListUpdateDto
{    
    @ApiProperty({
        description: 'id of updated list',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    id: string

    @ApiProperty({
        description: 'id of user that owns a list',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    owner_id: string
    @ApiProperty({
        description: 'New name for a list',
        example:"mylist 2",
        type: String,
        required: false
      })
    name?: string
    @ApiProperty({
        description: 'New description for a list',
        example:"best list ever!",
        type: String,
        required: false
      })
    description?: string 
}
