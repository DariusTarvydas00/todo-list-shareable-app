import {Controller, Get, Logger, Query, UseGuards} from '@nestjs/common';
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {AccountsService} from "./accounts.service";
import {Accounts} from "../core/accounts.entity";
import {AuthGuard} from "@nestjs/passport";
import {GetUser} from "../auth/get-user.decorator";
import {User} from "../core/user.entity";

@Controller('accounts')
export class AccountsController {

    constructor(private accountsService: AccountsService) {}

    @Get()
    getAccounts(
        @Query() filterDto: GetTasksFilterDto,
        @GetUser() user: User,
    ): Promise<Accounts[]> {
        return this.accountsService.getAccounts(filterDto ,user);
    }
}
