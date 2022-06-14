import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique:true})
    username: string;

}