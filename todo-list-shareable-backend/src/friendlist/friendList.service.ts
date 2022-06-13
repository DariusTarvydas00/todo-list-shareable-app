import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "../core/task.entity";
import {User} from "../core/user.entity";
import {FriendListRepository} from "./friendlist.repository";
import {FriendRequestEntity} from "../core/friendRequest.entity";

@Injectable()
export class FriendListService {
    constructor(
        @InjectRepository(FriendListRepository)
        private  friendListRepository: FriendListRepository
    ) {}
    // async getFriendRequests(user: User): Promise<FriendRequestEntity[]>{
    //     return this.friendListRepository.getFriendRequests(user);
    // }
    //
    // async sendFriendRequest(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    //     return this.tasksRepository.createTask(createTaskDto, user);
    // }
    //
    // async getTaskById(id:string, user:User): Promise<Task> {
    //     const found = await this.tasksRepository.findOne( {id, user});
    //     if (!found) {
    //         throw new NotFoundException("Task with ID: " + id + " not found");
    //     }
    //     return found
    // }
    //
    // async deleteTask(id:string, user:User): Promise<void>{
    //     const result = await this.tasksRepository.delete({id, user});
    //     if (result.affected === 0) {
    //         throw new NotFoundException("Task with ID: " + id + " not found");
    //     }
    // }
    //
    // async updateTaskStatus(id:string, status:TaskStatus, user:User): Promise<Task> {
    //     const task = await this.getTaskById(id, user);
    //     task.status = status;
    //     await this.tasksRepository.save(task);
    //     return task;
    // }

}

