import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, UseGuards } from '@nestjs/common';
import { CardService } from 'src/card/card.service';
import { ListService } from './list.service';
import { ListUpdateDto } from 'src/dtos/listUpdate.dto';
import { ListDto } from 'src/dtos/list.dto';
import { ListCreateDto } from 'src/dtos/listCreate.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListGuard } from './list.guard';

@ApiTags('TrelloAPI')
@Controller('users/:userId/lists')
export class ListController {
    constructor(
        private cardService: CardService,
        private listService: ListService
    ){}

    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: ListDto,
      })
    @Post()
    @UseGuards(ListGuard)
    public async createList(@Param('userId') userId: string, @Body() listDto: ListCreateDto): Promise<ListDto>
    {
        try {
            return await this.listService.createOne(userId, listDto.name, listDto.description ?? null) as ListDto
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
    @ApiResponse({
        description: "Single list",
        type: ListDto
    })
    @Get()
    public async getAllColumns(@Param('userId') id: string): Promise<ListDto[]>
    {
        try {
            return await this.listService.getAllByUserId(id) as ListDto[]
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
    @ApiResponse({
        description: "List of lists",
        type: [ListDto]
    })
    @Get(':listId')
    public async getById(@Param('listId') id: string): Promise<ListDto>
    {
        try {
            return await this.listService.getOneById(id) as ListDto
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
    @ApiResponse({
        description: "List successfully updated",
    })
    @UseGuards(ListGuard)
    @Post(':listId')
    public async updateListById(@Param('listId') listId: string, @Body() listDto: ListUpdateDto)
    {
        try
        {
            listDto.id = listId
            return await this.listService.updateById(listDto)
        }
        catch(e)
        {
            throw new InternalServerErrorException()
        }

    }
    @ApiResponse({
        description: "List successfully deleted",
    })
    @UseGuards(ListGuard)
    @Delete(':listId')
    public async deleteListById(@Param('listId') listId: string)
    {
        try {
            return await this.listService.deleteOne(listId)
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}
