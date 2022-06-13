import {EntityRepository, Repository} from "typeorm";
import {Task} from "../entities/task.entity";
import {CreateTaskDto} from "./dto/create-task.dto";
import {TaskStatus} from "./task-status.enum";
import {GetTasksFilterDto} from "./dto/get-tasks-filter.dto";
import {User} from "../entities/user.entity";
import {Logger} from "@nestjs/common";

@EntityRepository(Task)
export class TasksRepository extends Repository<Task>{
    private logger = new Logger("TasksRepository");
    async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>{
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');
        query.where({user});
        if (status) {
            query.andWhere('task.status = :status' , { status })
        }
        if (search) {
            query.andWhere(('LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)')), { search: '%${search}%' }
        }
        return await query.getMany();
    }

    async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        const { title, description, sharedWith } = createTaskDto;
        const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN,
            user,
            sharedWith
        });
        await this.save(task);
        return task;
    }
}