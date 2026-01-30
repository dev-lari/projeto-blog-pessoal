import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { TemaService } from "../../../tema/services/tema.service";

/* 
 indica que a classe é um serviço, ou seja, uma classe que pode ser injetada em outras classes por meio da Injeção de Dependências.
 Injeção de dependência é um padrão de design que visa reduzir o acoplamento entre as classes em um sistema. Em vez de uma classe 
 depender diretamente de outra classe concreta (ou seja, de uma implementação específica), a injeção de dependência permite que 
 as classes dependam de abstrações (interfaces ou classes abstratas), tornando o código mais flexível, modular e de fácil manutenção.
*/

//Injeção de controle
@Injectable()
export class PostagemService {
    //recebe as injeções de dependência necessárias para o desenvolvimento da classe de serviço.
    constructor( //na hora q ele for criado, quero que ele entenda
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>, //toda vez que alguém precisar, você pode injetar o repository 
        // (ele cria pra mim o meu objeto, o meu new alguma coisa) com base na postagem. É tipo uma herança
        private temaService: TemaService
    ) { }

    //Repository é um cara do TYPEORM, ele consegue fazer pedidos para o meu banco de dados; 

    //é chamado para retornar todos os registros da entidade Postagem. Em termos SQL, o método find() seria o SELECT * FROM tb_postagens;
    async findAll(): Promise<Postagem[]> { //procurar por tudo, promessa de trazer postagem em lista pq são todas as postagens
        return await this.postagemRepository.find({
            relations: {
                tema: true,
                usuario: true
            }
        });
    }

    //get por ID; findById é o nome em inglês que dei pra o método (procurar por Id). Toda vez que for chamado, vai receber um id do tipo nome, a promessa é ele retornar uma postagem;
    async findById(id: number): Promise <Postagem> {
        //pesquisa por id só traz uma postagem, um dado único, por isso não tem o array []
    const postagem = await this.postagemRepository.findOne({ //espera meu repository ir no banco de dados, ele vai rodar um findOne (procurar por um)
        where: { //onde tenha esse número de id: 
            id,
        },
         relations: {
                tema: true,
                usuario: true
        }
    });

    if (!postagem){ //verifica se não tem postagem ! (é não)
        throw new HttpException('A postagem não foi encontrada', HttpStatus.NOT_FOUND,);
        
    }
    
    return postagem;
    }

    async findAllByTitulo(titulo: string): Promise <Postagem []> {
        //pesquisa por titulo, titulo vai ser do tipo string, ele vai retornar uma postagem por titulo da lista de postagens.
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }, 
             relations: {
                tema: true,
                usuario: true
            }
        })
    }    

    //vou te mandar uma postagem, salva ela no banco de dados; 
    async create(postagem: Postagem): Promise<Postagem> { 

        await this.temaService.findById(postagem.tema.id)

        return await this.postagemRepository.save(postagem);        
    }

    async update(postagem: Postagem): Promise<Postagem>{
        await this.findById(postagem.id)

        await this.temaService.findById(postagem.tema.id)

        return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise <DeleteResult>{
        await this.findById(id)

        return await this.postagemRepository.delete(id)
    }

    }

//async: é uma função assincrona, não precisa falar o que está fazendo, pode fazer em segundo plano; é quem vai no banco de dados, Não é coisa instantanea, vou precisar esperar.
// buscar as info. Mas alguém precisa mandar ele fazer.
//promise: promete se vai ver se tem o pedido, se não tiver, ele não retorna nada. 
//return await: aguarda o retorno do promise trazer do banco de dados o que foi pedido; 
// O exemplo que Thiago deu comigo pedindo para eu pegar uma coca; 
