import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class ListCreateDto
{
    @ApiProperty({
        description: 'id of user that owns a list',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    owner_id: string

    @ApiProperty({
        description: 'Name of a new list',
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
