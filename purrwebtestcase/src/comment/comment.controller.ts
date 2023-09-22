import { Body, Controller, Delete, Get, Headers, InternalServerErrorException, Param, Post, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from 'src/dtos/comment.dto';
import { CommentUpdateDto } from 'src/dtos/commentUpdate.dto';
import { CommentCreateDto } from 'src/dtos/commentCreate.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { UserGuard } from 'src/user/user.guard';
import { CommentGuard } from './comment.guard';

@ApiTags('TrelloAPI')
@Controller('users/:userId/lists/:listId/cards/:cardId/comments')
export class CommentController {
    constructor(
        private commentService: CommentService,
        private jwtService: JwtService
    ){}


    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: CommentDto,
    })
    @Post()
    public async createOne(@Param('cardId') cardId: string, @Body() commentDto: CommentCreateDto, @Headers('Authorization') authHeader: string): Promise<CommentDto>
    {
        try {
            const ownerId = this.jwtService.verify(authHeader.split(' ')[1])['id']
            return await this.commentService.createOne(cardId, ownerId, commentDto.message) as CommentDto
        } catch (error) {
            throw error
        }
    } 


    @ApiResponse({
        description: "A list of comments on card",
        type: [CommentDto]
    })
    @Get()
    public async getAllByCardId(@Param('cardId') cardId: string): Promise<CommentDto[]>
    {
        try {
            return await this.commentService.getAllByCardId(cardId) as CommentDto[]
        } catch (error) {
            throw new InternalServerErrorException()
        }
    } 


    @ApiResponse({
        description: "A single comment",
        type: CommentDto
    })
    @Get(':commentId')
    public async getOneById(@Param('commentId') commentId: string): Promise<CommentDto>
    {
        try {
            return await this.commentService.getOneById(commentId) as CommentDto
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }


    @ApiResponse({
        description: "Comment successfully updated",
    })
    @UseGuards(CommentGuard)
    @Post(':commentId')
    public async updateOneById(@Param('commentId') commentId: string, @Param('cardId') cardId: string, @Body() commentDto: CommentUpdateDto)
    {
        try {

            commentDto.id = commentId
            return this.commentService.updateById(commentDto)
                } catch (error) {
            throw new InternalServerErrorException()
        }}


    @ApiResponse({
        description: "Comment successfully deleted",
    })
    @UseGuards(CommentGuard)
    @Delete(':commentId')
    public async deleteOne(@Param('commentId') commentId: string)
    {
        try {
            return this.commentService.deleteOne(commentId)
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}
