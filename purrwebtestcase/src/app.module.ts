import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { databaseProviders } from './providers/database.providers';
import { AuthService } from './auth/auth.service';
import { CardService } from './card/card.service';
import { ListService } from './list/list.service';
import { UserService } from './user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ListController } from './list/list.controller';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { CardController } from './card/card.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '360s' },
    }),],
  controllers: [AuthController, UserController, ListController, CommentController, CardController],
  providers: [databaseProviders[0], AuthService, CardService, ListService, UserService, CommentService],
})
export class AppModule {}
