import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../services/postagem.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";


//O usuário manda um pedido pra Controller, ele entende o pedido do usuário e chama quem sabe fazer, que é o postagemService; 
@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller("/postagens")
@ApiBearerAuth()
export class PostagemController{
    constructor(private readonly postagemService: PostagemService) {} //ele injeta a service aqui para a controller poder chamar;

    @Get() //quando quero rodar um pedido de solicitação, quando quero buscar algo. Ele quem responde. 
    @HttpCode(HttpStatus.OK) //na hora de devolver pro usuário, ele responde com o status de OK 
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll(); // ele não executa nada, só manda. É o chefe que pede e o service é o funcionário; só chama na hr q precisar
    }
    // como isso também não é instantaneo, ele também aguarda uma promessa. 

    @Get('/:id') //precisa passar o parâmetro para q ele entenda que quem responde é o id, se não dá erro quando procurar por id
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{ //segue o mesmo nome e a mesma tipagem do service nesse começo
        //você vai procurar um parâmetro (qlqr coisa que a gente digita depois do endereço na página) id e transformar em número, esse número vou
        //chamar ele de id e ele vai retornar uma postagem;
        // esse bloco de código é um padrão para toda vez q eu precisar pegar um número em uma requisição. 
        return this.postagemService.findById(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByAllTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
        return this.postagemService.findAllByTitulo(titulo);
    }

    @Post() //para enviar informação nova
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem>{ //esse cara vai pegar o CORPO da requisitação, vai chamar de postagem e ele é do tipo postagem
        return this.postagemService.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem>{
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }
}