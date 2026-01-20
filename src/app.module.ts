import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './postagem/tema/entities/tema.entity';
import { TemaModule } from './postagem/tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

//Configurar para o banco de dados;
@Module({ //é pedindo para as linhas abaixo se comportarem como um módulo; 
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql', 
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_blogpessoal', 
    entities: [Postagem, Tema, Usuario],
    synchronize: true,
  }),
  //O módulo responsável por postagem, para criar a tabela precisa ir nesse módulo: 
  PostagemModule,  
  TemaModule,
  AuthModule, 
  UsuarioModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

//todos os decorator começam com @, é para falar o que a linha de baixo vai se comportar de tal jeito; 
// é quando estou chamando algo do nest ou do typeORM pra fazer algo pra mim