import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import {configValidationSchema} from "./config.schema";
import { AccountsModule } from './accounts/accounts.module';

const ENV = process.env.NODE_ENV;

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '161.97.99.214',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            autoLoadEntities: true,
            synchronize: true,
        }),
        ConfigModule.forRoot({
            envFilePath: [`.env`],
            validationSchema: configValidationSchema,
        }),
        TasksModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const isProduction = configService.get('STAGE') === 'prod';

                return {
                    ssl: isProduction,
                    extra: {
                        ssl: isProduction ? { rejectUnauthorized: false } : null,
                    },
                    type: 'postgres',
                    autoLoadEntities: true,
                    synchronize: true,
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    entities: ['dist/**/*.entity{.ts,.js}'],
                };
            },
       }),
        AuthModule,
       AccountsModule,
    ],
})
export class AppModule {}
