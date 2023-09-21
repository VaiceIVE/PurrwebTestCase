import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, UseGuards } from '@nestjs/common';
import { CardUpdateDto } from 'src/dtos/cardUpdate.dto';
import { CardService } from './card.service';
import { CardCreateDto } from 'src/dtos/cardCreate.dto';
import { CardDto } from 'src/dtos/card.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CardGuard } from './card.guard';

@ApiTags('TrelloAPI')
@Controller('users/:userId/lists/:listId/cards')
export class CardController {
    constructor(
        private cardService: CardService
    ){}

    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: CardDto,
      })
    public async createCard(@Param('listId') listId: string, @Body() cardDto: CardCreateDto) : Promise<CardDto>
    {
        try {
            return await this.cardService.createOne(cardDto.name, listId, cardDto.description ?? null) as CardDto
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    @Get()
    @ApiCreatedResponse({
        description: 'A list of cards.',
        type: [CardDto],
      })
    public async getCards(@Param('listId') id: string) : Promise<CardDto[]>
    {
        try {
            return await this.cardService.getAllByListId(id) as CardDto[]
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    @ApiResponse({
        description: 'Card.',
        type: CardDto,
      })
    @Get(':cardId')
    public async getCardById(@Param('cardId') id: string): Promise<CardDto>
    {
        try {
            return await this.cardService.getOneById(id) as CardDto
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    @ApiResponse({
        description: "Card successfully updated",
    })
    @UseGuards(CardGuard)
    @Post(':cardId')
    public async updateCardById(@Param('cardId') cardId: string, @Body() cardDto: CardUpdateDto)
    {
        try {
            cardDto.id = cardId
            return await this.cardService.updateById(cardDto)
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    @ApiResponse({
        description: "Card successfully deleted",
    })
    @UseGuards(CardGuard)
    @Delete(':cardId')
    public async deleteCardById(@Param('cardId') cardId: string)
    {
        try {
            return this.cardService.deleteById(cardId)
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}
