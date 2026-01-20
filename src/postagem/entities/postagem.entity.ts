import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

//lá no banco de dados, isso aqui vai ser criado dentro de uma tabela chamada tb_postagem; 
@Entity({name: 'tb_postagem'}) // ele especifica que isso abaixo é uma entidade pelo typeORM, sempre vai ter o nome da tabela

export class Postagem{
    //transformar esses atributos em uma tabela: 
    @PrimaryGeneratedColumn()
    id: number; 

    @IsNotEmpty() // o título não pode ser vazio. Ele vem do class-validator, ele faz validação
    @Column({length: 100, nullable: false}) // o título precisa saber a largura (o numero do varchar) e colocar o not null (nullable: false para ele não ser nulo)
    titulo: string; 

    @IsNotEmpty()
    @Column({length: 1000, nullable: false}) //o nullabe false diz que NÃO PODE ser falso; 
    texto: string; 

    @UpdateDateColumn() // ele atualiza toda vez que a gente inserir algo no banco, gerencia a data das postagens
    data: Date; 

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        //O muito para um vai ser com a tabela tema, lá na tabela tema, você vai encontrar um atributo postagem
        onDelete: "CASCADE"
        // se eu deletar o tema, as postagens que faz parte desse tema também serão deletadas. 
    })

    tema: Tema

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}

//precisa colocar esses @ do typeORM para ele fazer o link com o banco de dados e atualizar de acordo com os dados entrando
//O IsNotEmpty é bom colocar nos atributos que tem o nullable; 
