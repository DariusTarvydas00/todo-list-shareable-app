import {Controller, Get, Logger, Query} from '@nestjs/common';
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {GetUser} from "../auth/get-user.decorator";
import {User} from "../core/user.entity";
import {AccountsService} from "./accounts.service";
import {Accounts} from "../core/accounts.entity";

@Controller('accounts')
export class AccountsController {

    constructor(private accountsService: AccountsService) {}

    @Get()
    getAccounts(
        @Query() filterDto: GetTasksFilterDto,
        @GetUser() user: User,
    ): Promise<Accounts[]> {
        return this.accountsService.getAccounts(filterDto, user);
    }
}
