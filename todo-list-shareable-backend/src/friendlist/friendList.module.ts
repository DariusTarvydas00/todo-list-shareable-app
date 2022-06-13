import { Module } from '@nestjs/common';
import { FriendListController } from './friendList.controller';
import { FriendListService } from './friendList.service';

@Module({
  controllers: [FriendListController],
  providers: [FriendListService]
})
export class FriendListModule {}
