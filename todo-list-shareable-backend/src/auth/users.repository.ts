import {EntityRepository, Repository} from "typeorm";
import {User} from "../core/user.entity";
import {AuthCredentialsDto} from "./dto/auth-credentials.dto";
import {ConflictException, InternalServerErrorException} from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import {Accounts} from "../core/accounts.entity";
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {Task} from "../core/task.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User>{
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto

        const salt = await  bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = this.create({username, password: hashedPassword});

        try {
            await this.save(user);
        } catch (error) {
            if (error.code === '23505'){
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
    async getAccounts(filterDto: GetTasksFilterDto): Promise<Accounts[]> {
            const { search } = filterDto;
            const query = this.createQueryBuilder('user');
            if (search) {
                query.andWhere(('LOWER(user.username) LIKE LOWER(:search) ')), { search: '%${search}%' }
            }
            return await query.getMany();
    }
}