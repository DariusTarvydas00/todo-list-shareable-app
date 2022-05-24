import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TasksModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: '161.97.99.214',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'task-management',
    autoLoadEntities: true,
    synchronize: true
  })],
})
export class AppModule {}
