import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from '../tema/entities/tema.entity';
import { TemaModule } from '../tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';

//Configurar para o banco de dados;
@Module({ //é pedindo para as linhas abaixo se comportarem como um módulo; 
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
	  useClass: ProdService,
    imports: [ConfigModule],
  }),
  PostagemModule,  
  TemaModule,
  AuthModule, 
  UsuarioModule
],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

//todos os decorator começam com @, é para falar o que a linha de baixo vai se comportar de tal jeito; 
// é quando estou chamando algo do nest ou do typeORM pra fazer algo pra mim