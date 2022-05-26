import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {TransformInterceptor} from "./transform.interceptor";
import { Logger } from '@nestjs/common'
import {CorsOptions} from "@nestjs/common/interfaces/external/cors-options.interface";

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    allowedHeaders: ['origin', 'x-requested-with', 'content-type', 'accept', 'authorization'],
    credentials: true,
    origin: ['http://161.97.99.214:3001', 'http://161.97.99.214:3000'],
  }
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
  const port = 3000;
  logger.log('Application listening on port ${port}')
}
bootstrap();
