import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { List } from './list.entity';

@Table({tableName: "cards"})
export class Card extends Model{
  
    @Default(DataType.UUIDV4)
    @AllowNull(false)
    @PrimaryKey
    @Column(DataType.UUID)
    id: string; 

    @Column(DataType.UUID)
    @ForeignKey(() => List)
    list_id: string;

    @AllowNull(false)
    @Column
    name: string;

    @Column(DataType.STRING)
    description: string;

    @BelongsTo(() => List)
    list: List
}






  /*
  CREATE TABLE "cards" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "list_id" uuid,
  "name" varchar NOT NULL,
  "description" varchar
);
  */