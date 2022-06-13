import {Controller, Get, Query} from '@nestjs/common';

@Controller('friendList')
export class FriendListController {
    @Get()
    getTasks(){
        return true;
    }
}
