import {Injectable, NotFoundException} from '@nestjs/common';
import {TaskStatus} from "./task-status.enum";
import { v4 as uuid } from 'uuid'
import {CreateTaskDto} from "./dto/create-task.dto";
import {GetTasksFilterDto} from "./dto/get-tasks-filter.dto";
import {TasksRepository} from "./tasks.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./task.entity";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository: TasksRepository
    ) {}
    // getAllTasks() {
    //     return this.tasks;
    // }
    // getTasksWithFilters(filtersDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filtersDto;
    //     let tasks = this.getAllTasks();
    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status)
    //     }
    //     if (search) {
    //         tasks = tasks.filter((task) => {
    //             return task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search);
    //
    //         });
    //     }
    //     return tasks
    // }
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = createTaskDto
        const task = this.tasksRepository.create({
            title,
            description,
            status: TaskStatus.OPEN
        });
        await this.tasksRepository.save(task);
        return task;
    }
    async getTaskById(id:string): Promise<Task> {
        const found = await this.tasksRepository.findOne(id);
        if (!found) {
            throw new NotFoundException("Task with ID: " + id + " not found");
        }
        return found
    }
    // deleteTask(id:string): void{
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter((task) => task.id !==found.id);
    // }
    // updateTaskStatus(id:string, status:TaskStatus) {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
