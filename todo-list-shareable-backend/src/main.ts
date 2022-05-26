import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {TransformInterceptor} from "./transform.interceptor";
import { Logger } from '@nestjs/common'
import { cors } from 'cors'

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://161.97.99.214:3000',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
  const port = 3000;
  logger.log('Application listening  on port ${port}')
}
bootstrap();
