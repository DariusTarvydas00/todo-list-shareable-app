import {Column, PrimaryGeneratedColumn} from "typeorm";

export class FriendRequestEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    accepted: boolean
}