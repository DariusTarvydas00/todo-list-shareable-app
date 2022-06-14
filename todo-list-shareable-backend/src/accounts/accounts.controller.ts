import {Controller, Get, Query} from '@nestjs/common';
import {GetUser} from "../auth/get-user.decorator";
import {GetAccountsFilterDto} from "./dto/get-accounts-filter.dto";
import {AccountsService} from "./accounts.service";
import {Accounts} from "../core/accounts.entity";

@Controller('accounts')
export class AccountsController {

    constructor(private accountService: AccountsService) {
        this.accountService = accountService
    }

    @Get()
    getAccounts(
        @Query() filterDto: GetAccountsFilterDto,
        @GetUser() accounts: Accounts,
    ): Promise<Accounts[]> {
        return this.accountService.getAccounts(filterDto);
    }
}
