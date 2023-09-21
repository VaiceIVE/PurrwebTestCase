import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Card } from './card.entity';
import { User } from './user.entity';

@Table({tableName: "comments"})
export class Comment extends Model{

    
    @Default(DataType.UUIDV4)
    @AllowNull(false)
    @PrimaryKey
    @Column(DataType.UUID)
    id: string; 

    @AllowNull(false)
    @Column(DataType.UUID)
    @ForeignKey(() => Card)
    card_id: string;

    @AllowNull(false)
    @Column(DataType.UUID)
    @ForeignKey(() => User)
    owner_id: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    message: string;

    @BelongsTo(() => Card)
    card: Card

    @BelongsTo(() => User)
    user: User
}

/*
CREATE TABLE "comments" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "card_id" uuid,
  "owner_id" uuid,
  "message" varchar NOT NULL
);
 */