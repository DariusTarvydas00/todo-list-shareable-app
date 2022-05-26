import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {TransformInterceptor} from "./transform.interceptor";
import { Logger } from '@nestjs/common'
import { cors } from 'cors'

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {cors: true});
  const options = {
    "origin":true,  // attempted "origin":["http://localhost:3000"]
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200,
    "credentials":true,
    "allowedHeaders": "Content-Type, Accept,Authorization",

  }
  app.use(cors(options))
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
  const port = 3000;
  logger.log('Application listening  on port ${port}')
}
bootstrap();
