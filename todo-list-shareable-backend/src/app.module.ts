import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TasksModule,
      ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    host: 'nestjs_backend',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'task-management',
    autoLoadEntities: true,
    synchronize: true
  }),
    AuthModule,
  ],
})
export class AppModule {}
