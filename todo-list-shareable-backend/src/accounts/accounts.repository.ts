import {EntityRepository, Repository} from "typeorm";
import {Accounts} from "../core/accounts.entity";
import {GetTasksFilterDto} from "../tasks/dto/get-tasks-filter.dto";
import {User} from "../core/user.entity";
import {Logger} from "@nestjs/common";

@EntityRepository(User)
export class AccountsRepository extends Repository<Accounts>{
    async getAccounts(filterDto: GetTasksFilterDto): Promise<Accounts[]>{
        let logger = new Logger()
        logger.log("reached")
        const {  search } = filterDto;
        const query = this.createQueryBuilder('user');
        if (search) {
            query.andWhere('LOWER(user.username) LIKE LOWER(:search) '), { search: '%${search}%' }
        }

        return await query.getMany();
    }
    // async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    //     const { username, password } = authCredentialsDto
    //
    //     const salt = await  bcrypt.genSalt();
    //     const hashedPassword = await bcrypt.hash(password,salt);
    //
    //     const user = this.create({username, password: hashedPassword});
    //
    //     try {
    //         await this.save(user);
    //     } catch (error) {
    //         if (error.code === '23505'){
    //             throw new ConflictException('Username already exists');
    //         } else {
    //             throw new InternalServerErrorException();
    //         }
    //     }
    // }
}