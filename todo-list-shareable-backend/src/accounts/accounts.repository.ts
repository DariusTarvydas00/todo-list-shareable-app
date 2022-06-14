import {EntityRepository, Repository} from "typeorm";
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {Accounts} from "../core/accounts.entity";

@EntityRepository(Accounts)
export class AccountsRepository extends Repository<Accounts> {
    async getAccounts(filterDto: GetTasksFilterDto): Promise<Accounts[]> {
        const { search } = filterDto;
        const query = this.createQueryBuilder('accounts');
        if (search) {
            query.andWhere(('LOWER(user.username) LIKE LOWER(:search)')), {search: '%${search}%'}
        }
        return await query.getMany();
    }
}