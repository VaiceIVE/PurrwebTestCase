import { ApiProperty } from "@nestjs/swagger"

export class CommentUpdateDto
{
    @ApiProperty({
        description: 'Id of a comment that we are going to edit',
        example:"35520094-213f-4764-8691-26f55f98a847",
        type: String,
        required: true
      })
    id: string
    @ApiProperty({
        description: 'Edited Message',
        example:"Potatoes",
        type: String,
        required: true
      })
    message: string
}
