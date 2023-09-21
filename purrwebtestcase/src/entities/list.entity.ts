import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User } from './user.entity';

@Table({tableName: "lists"})
export class List extends Model{

    
    @Default(DataType.UUIDV4)
    @AllowNull(false)
    @PrimaryKey
    @Column(DataType.UUID)
    id: string; 

    @AllowNull(false)
    @Column(DataType.UUID)
    @ForeignKey(() => User)
    owner_id: string;

    @AllowNull(false)
    @Column
    name: string;

    @Column(DataType.STRING)
    description: string;

    @BelongsTo(() => User)
    user: User
}



/*
CREATE TABLE "lists" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "owner_id" uuid,
  "name" varchar NOT NULL,
  "description" varchar
);
*/