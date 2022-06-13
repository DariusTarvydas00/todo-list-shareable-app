import {Controller, Get, Logger, Query} from '@nestjs/common';
import {User} from "../core/user.entity";
import {UsersService} from "./users.service";
import {GetUsersFilterDto} from "./dto/get-users-filter.dto";
import {GetUser} from "../auth/get-user.decorator";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    getUsers(
        @Query() filterDto: GetUsersFilterDto,
        @GetUser() user: User,
    ): Promise<User[]> {
        return this.userService.getUsers(filterDto);
    }
}
