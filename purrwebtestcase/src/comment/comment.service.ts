import { Injectable } from '@nestjs/common';
import { CommentUpdateDto } from 'src/dtos/commentUpdate.dto';
import { ListUpdateDto } from 'src/dtos/listUpdate.dto';
import { Comment } from 'src/entities/comment.entity';

@Injectable()
export class CommentService {

    public async getAllByCardId(id: string)
    {
        return await Comment.findAll({where: {card_id: id}});
    }

    public async getOneById(id: string)
    {
        return await Comment.findByPk(id);
    }

    public async createOne(cardId: string, ownerId: string, message: string)
    {
        return await Comment.create({card_id: cardId, owner_id: ownerId, message: message})
    }

    public async deleteOne(id: string)
    {
        return await Comment.destroy({where: {id: id}})
    }

    public async updateById(listDto: CommentUpdateDto)
    {
        return await Comment.update(listDto, {where: {id: listDto.id}})
    }
}
