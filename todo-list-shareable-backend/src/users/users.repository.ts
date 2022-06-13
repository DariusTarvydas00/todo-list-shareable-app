import {Repository} from "typeorm";
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {User} from "../core/user.entity";

export class UsersRepository extends Repository<User> {
    async getUsers(filterDto: GetTasksFilterDto): Promise<User[]> {
        const {search} = filterDto;
        const query = this.createQueryBuilder('users');
        if (search) {
            query.andWhere(('LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)')), {search: '%${search}%'}
        }
        return await query.getMany();
    }
}