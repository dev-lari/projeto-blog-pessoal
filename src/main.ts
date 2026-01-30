import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Larissa de Souza","Linkedin: https://linkedin.com/in/lari-souza","Email: larisouzadev@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

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
