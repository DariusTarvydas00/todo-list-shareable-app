import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../core/user.entity";
import {GetUsersFilterDto} from "./dto/get-users-filter.dto";
import {UsersRepository} from "./users.repository";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ) {}

    async getUsers(filterDto: GetUsersFilterDto): Promise<User[]>{
        return this.usersRepository.getUsers(filterDto);
    }
}
