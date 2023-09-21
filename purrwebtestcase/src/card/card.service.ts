import { Injectable } from '@nestjs/common';
import { where } from 'sequelize';
import { CardUpdateDto } from 'src/dtos/cardUpdate.dto';
import { Card } from 'src/entities/card.entity';

@Injectable()
export class CardService {

    public async getAllByListId(id: string)
    {
        return Card.findAll({where: {list_id: id}});
    }

    public async getOneById(id: string)
    {
        return Card.findByPk(id);
    }

    public async createOne(name: string, listId: string, description?: string)
    {
        return Card.create({name: name, list_id: listId, description: description ?? null})
    }

    public async deleteById(id: string)
    {
        return Card.destroy({where: {id: id}})
    }

    public async updateById(cardDto: CardUpdateDto)
    {
        return Card.update(cardDto, {where: {id: cardDto.id}})
    }
}


 /*
  CREATE TABLE "cards" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "listId" uuid,
  "name" varchar NOT NULL,
  "description" varchar
);
  */