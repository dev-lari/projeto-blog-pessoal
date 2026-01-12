import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ajuste para o horário do Brasil
  process.env.TZ = '-03:00'

  //adiciona validação em toda entrada de dados
  app.useGlobalPipes(new ValidationPipe());

  //limita ou libera acesso aos servidores da minha API/back-end
  app.enableCors();

  //Abertura de porta para receber dados
  await app.listen(process.env.PORT ?? 4000);

}
bootstrap();
