import { Sequelize } from 'sequelize-typescript';
import { Card } from 'src/entities/card.entity';
import { Comment } from 'src/entities/comment.entity';
import { List } from 'src/entities/list.entity';
import { User } from 'src/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
      });
      sequelize.addModels([User, List, Card, Comment]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
