import {Repository} from "typeorm";
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {User} from "../core/user.entity";

export class UsersRepository extends Repository<User> {
    async getUsers(filterDto: GetTasksFilterDto): Promise<User[]> {
        const {search} = filterDto;
        const query = this.createQueryBuilder('users');
        if (search) {
            query.andWhere(('LOWER(user.username) LIKE LOWER(:search)')), {search: '%${search}%'}
        }
        return await query.getMany();
    }
}