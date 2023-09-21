import { Injectable } from '@nestjs/common';
import { ListUpdateDto } from 'src/dtos/listUpdate.dto';
import { List } from 'src/entities/list.entity';

@Injectable()
export class ListService {
    
    public async getAllByUserId(id: string)
    {
        return await List.findAll({where: {owner_id: id}});
    }

    public async getOneById(id: string)
    {
        return await List.findByPk(id);
    }

    public async createOne(ownerId: string, name: string, description? : string)
    {
        return await List.create({owner_id: ownerId, name: name, description: description ?? null})
    }

    public async deleteOne(listId)
    {
        return await List.destroy({where: {list_id: listId}})
    }

    public async updateById(listDto: ListUpdateDto)
    {
        return await List.update(listDto, {where: {id: listDto.id}})
    }
}

/*
CREATE TABLE "lists" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "ownerId" uuid,
  "name" varchar NOT NULL,
  "description" varchar
);
*/