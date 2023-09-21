import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { List } from './list.entity';

@Table({tableName: "users"})
export class User extends Model{

    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column(DataType.STRING)
    id: string; 

    @AllowNull(false)
    @Unique
    @Column
    email: string;

    @AllowNull(false)
    @Column
    username: string;

    @AllowNull(false)
    @Column
    hash_password: string;

    @Default(false)
    @Column
    is_verified: boolean;

    @HasMany(() => List)
    list: List[]
}


/*
CREATE TABLE "users" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "email" varchar NOT NULL,
  "username" varchar NOT NULL,
  "hash_password" varchar NOT NULL,
  "is_verified" bool NOT NULL DEFAULT false
);
*/