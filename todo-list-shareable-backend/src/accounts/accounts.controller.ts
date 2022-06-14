import {Controller, Get, Query, UseGuards} from '@nestjs/common';
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {GetUser} from "../auth/get-user.decorator";
import {User} from "../core/user.entity";
import {AccountsService} from "./accounts.service";
import {Accounts} from "../core/accounts.entity";
import {AuthGuard} from "@nestjs/passport";

@Controller('accounts')
@UseGuards(AuthGuard())
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
