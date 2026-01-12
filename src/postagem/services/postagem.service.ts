import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

/* 
 indica que a classe é um serviço, ou seja, uma classe que pode ser injetada em outras classes por meio da Injeção de Dependências.
 Injeção de dependência é um padrão de design que visa reduzir o acoplamento entre as classes em um sistema. Em vez de uma classe 
 depender diretamente de outra classe concreta (ou seja, de uma implementação específica), a injeção de dependência permite que 
 as classes dependam de abstrações (interfaces ou classes abstratas), tornando o código mais flexível, modular e de fácil manutenção.
*/
@Injectable()
export class PostagemService {
    //recebe as injeções de dependência necessárias para o desenvolvimento da classe de serviço.
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) { }

    //é chamado para retornar todos os registros da entidade Postagem. Em termos SQL, o método find() seria o SELECT * FROM tb_postagens;
    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find();
    }
}