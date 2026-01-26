import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Testes dos Módulos Usuário e Auth (e2e)', () => {
  let token: any;
  let usuarioId: any;
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ":memory:",
        entities: [__dirname + "./../src/**/entities/*.entity.ts"],
        synchronize: true,
        dropSchema: true
      }),
      AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => { //depois que terminar todos os testes (os its), fecha a conexão (é como se ele fechasse o terminal)
	await app.close();
  });
  
  it('01 - Deve cadastrar um novo usuário', async() =>{
    const resposta = await request(app.getHttpServer()) //toda vez que eu precisar pegar uma resposta do insomnia (o retorno do lado esquerdo), eu abro a const resposta
    .post('/usuarios/cadastrar')
    .send({
      nome: 'Larissa',
      usuario: 'lari@gmail.com',
      senha: 'root1234',
      foto: '-',
    })
    .expect(201)

    usuarioId = resposta.body.id;
  });

  it('02 - Não deve cadastrar um usuário duplicado', async()=> {
    return await request(app.getHttpServer())
    .post('/usuarios/cadastrar')
    .send({
      nome: 'Larissa',
      usuario: 'lari@gmail.com',
      senha: 'root1234',
      foto: '-',
    })
    .expect(400)
  });

  it('03 - Deve autenticar o usuário (Login)', async() =>{
    const resposta = await request(app.getHttpServer())
    .post("/usuarios/logar")
    .send({
      usuario: 'lari@gmail.com',
      senha: 'root1234',
    })
    .expect(200)

    token = resposta.body.token;
  });

  it('04 - Listar todos os usuários', async() => {
    return await request(app.getHttpServer())
    .get('/usuarios/all')
    .set('Authorization', `${token}`)
    .expect(200)
  });

  it('05 - Deve atualizar um usuário', async() => {
    return request(app.getHttpServer())
    .put('/usuarios/atualizar')
    .set('Authorization', `${token}`)
    .send({
      id: usuarioId,
      nome: 'Larissa Souza',
      usuario: 'lari@gmail.com',
      senha: 'root1234',
      foto: '-',
    })
    .expect(200)
    .then(resposta => {
      expect("Larissa Souza").toEqual(resposta.body.nome);
    })
  });

});
