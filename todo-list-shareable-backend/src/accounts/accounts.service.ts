import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {User} from "../core/user.entity";
import {AccountsRepository} from "./accounts.repository";
import {Accounts} from "../core/accounts.entity";

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(AccountsRepository)
        private accountsRepository: AccountsRepository
    ) {}

    async getAccounts(filterDto: GetTasksFilterDto, user: User): Promise<Accounts[]>{
        return this.accountsRepository.getAccounts(filterDto, user);
    }
}
