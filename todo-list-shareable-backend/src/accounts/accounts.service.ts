import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {User} from "../core/user.entity";
import {Accounts} from "../core/accounts.entity";
import {UsersRepository} from "../auth/users.repository";

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ) {}

    async getAccounts(filterDto: GetTasksFilterDto, user: User): Promise<Accounts[]>{
        return this.usersRepository.getAccounts(filterDto);
    }
}
