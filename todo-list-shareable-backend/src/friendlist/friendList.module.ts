import { Module } from '@nestjs/common';
import { FriendListController } from './friendList.controller';
import { FriendListService } from './friendList.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([FriendListModule]),
    AuthModule
  ],
  controllers: [FriendListController],
  providers: [FriendListService]
})
export class FriendListModule {}
