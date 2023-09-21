import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class ListDto
{
    @ApiProperty({
        description: 'Id of a list',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    @IsNotEmpty()
    @IsString()
    id: string

    @ApiProperty({
        description: 'id of user that owns a list',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    @IsNotEmpty()
    @IsString()
    owner_id: string

    @ApiProperty({
        description: 'Name of a list',
        example:"mylistname",
        type: String,
        required: true
      })
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({
        description: 'Description of a list',
        example:"mylistdesc",
        type: String,
        required: false
      })
    description?: string 
}
