import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AccountsRepository} from "./accounts.repository";
import {UsersRepository} from "../auth/users.repository";

@Module({
  imports:[TypeOrmModule.forFeature([AccountsRepository, UsersRepository])],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
