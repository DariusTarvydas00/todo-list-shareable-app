import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import {User} from "./user.entity";

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique:true})
    username: string;

    @Column()
    @Exclude({toPlainOnly: true})
    password: string;

}