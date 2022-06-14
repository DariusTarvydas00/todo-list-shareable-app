import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {Accounts} from "../core/accounts.entity";
import {AccountsRepository} from "./accounts.repository";

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(AccountsRepository)
        private accountsRepository: AccountsRepository
    ) {}

    async getAccounts(filterDto: GetTasksFilterDto): Promise<Accounts[]>{
        return this.accountsRepository.getAccounts(filterDto);
    }
}
