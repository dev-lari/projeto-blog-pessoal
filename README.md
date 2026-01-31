# Projeto Blog Pessoal
![Status](https://img.shields.io/badge/STATUS-EM%20ANDAMENTO-yellow)

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) 
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-007ACC?style=for-the-badge&logo=typeorm&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) 
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white) 
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

O projeto de blog pessoal foi desenvolvimento com **Nest.JS** e **TypeScript**, criado para praticar conceitos de **backend moderno**, **arquitetura modular** e **CRUD de posts**. O sistema permite **cadastro de usuários**, **autenticação** e **gerenciamento de publicações**.


## Objetivo
Este projeto foi construído como parte dos meus estudos no Bootcamp da Generation Brasil em Nest.js. A ideia é ter uma aplicação simples, mas completa, que simula um blog pessoal, garantindo o aprendizado sobre:
- Boas práticas em estruturas de projetos em Nest.JS;
- Criação de APIs RESTful;
- Autenticação e autorização com implementação das camadas de segurança;
- Boas práticas de organização de código.

## Tecnologias utilizadas
- MySQL - Banco de dados relacional utilizado na Produção e Desenvolvimento;
- SQLite - Banco de dados relacional utilizado em testes;
- TypeScript - Linguagem utilizada no desenvolvimento;
- NestJS – Framework backend para construção da API;
- TypeORM – ORM para mapeamento e manipulação dos dados;
- JWT – Autenticação e segurança;
- Render – Plataforma utilizada para deploy da aplicação;
- Swagger - Documentação para testes do projeto;
- Insomnia - Teste de rota do projeto.

## Funcionalidades(Endpoints)
### Postagens
- GET /postagens - Lista todas as postagens; 
- GET /postagens/{id} - Busca postagens pelo ID;
- GET /postagens/titulo/{titulo} - Busca postagens por palavras no título; 
- POST /postagens - Cadastra uma nova postagem; 
- PUT /postagens - Atuliza uma postagem já existente; 
- DELETE /postagens/{id} - Remove uma postagem pelo ID.

### Temas
- GET /temas - Lista todos os temas; 
- GET /temas/{id} - Busca tema pelo ID;
- GET /temas/descricao/{descricao} - Busca tema por descrição; 
- POST /temas - Cadastra um novo tema; 
- PUT /temas - Atuliza um tema já existente; 
- DELETE /temas/{id} - Remove um tema pelo ID.

### Usuário
- POST /usuarios/cadastrar - Cadastra novo usuário;
- POST /usuarios/logar - Autenticação e retorno do Token JWT;
- GET /usuarios/all - Lista todos os usuários;
- PUT /usuarios/atualizar - Atualiza dados do usuário;


## Contatos
<div> 
  <a href = "mailto:larisouzadev@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/souza-lari/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  
</div>
