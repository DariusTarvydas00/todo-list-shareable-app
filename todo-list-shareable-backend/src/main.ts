import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {TransformInterceptor} from "./transform.interceptor";
import { Logger } from '@nestjs/common'
import { cors } from 'cors'

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {cors: true});
  const server = require('http').createServer();
  const options={
    cors:true,
    origins:["http://127.0.0.1:3000","http://localhost:3000","http://169.97.99.214","http://nestjs_backend"],
  }
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.use(cors(options))
  await app.listen(3000);
  const port = 3000;
  logger.log('Application listening  on port ${port}')
}
bootstrap();
