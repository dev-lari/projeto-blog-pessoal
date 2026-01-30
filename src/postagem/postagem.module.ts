import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { TemaModule } from "../../tema/tema.module";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule], // importa o typeORM e entre os [] coloca a entidade que a gente definiu para conectar com o banco de dados;
    controllers: [PostagemController],
    providers: [PostagemService],
    exports: [],
})

export class PostagemModule {} // só define a classe como modulo principal 
