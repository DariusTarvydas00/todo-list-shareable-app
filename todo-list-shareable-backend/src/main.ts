import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {TransformInterceptor} from "./transform.interceptor";
import { Logger } from '@nestjs/common'
import {config} from "rxjs";

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule)
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    app.enableCors()
  } else {
    app.enableCors({
      origin: 'http://161.97.99.214:3000'
      // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      // credentials: false,
      // ...
    })
  }
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
  const port = 3000;
  logger.log('Application listening on port ${port}')
}
bootstrap();
