import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
const logger = new Logger("Microservice");
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
       AppModule,
       {
           transport:Transport.TCP,
           options:{
                port:8002
           }
       }
  )
  await app.listen();
  logger.log(`Microservice is running on port ${8002}`);
}
bootstrap();
