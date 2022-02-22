# Introdução a APIs e métodos HTTP 📋

## Anotações feita durante as aulas do cursos:

### Objetivo:

- Entender o você precisa saber para construir API's verdadeiramente Restful

## O que é API?

- Application Program Interface (API)
- Pense em API como a camada que esconde as regras e possibilita uma comunicação externa.
- Facilita muito a integração
- Existem várias metodologias ( ou arquiteturas ), como por exemplo: ``SOA, Rest, uso por meio de SDK``

## Rest / Restful
**Rest:** Metodologia / Arquitetura <br>
**Restful:** API que faz uso do Rest

### Características:
- Trafego dos dados por JSON ( os antigos ainda usam xml )
- Padronização de endpoint’s
- Uso de HTTP Methods ( Get, Post, Put, Delete )
- Fácil entendimento ao iniciar uma integração

## Http Methods:
Get: ``Sempre obtém os dados`` <br>
Post: ``Cria um novo registro ou Recurso`` <br>
Put: ``Atualiza um registro existente`` <br>
Delete: ``Remove um registro existente`` <br>

## Padrões ✔
Get: ``/api/dev/user`` <br>
Post: ``/api/dev/user`` <br>
Put: ``/api/dev/user/{id}`` <br>
Delete: ``/api/dev/user/{id}`` <br>

## Erros comuns ❌
Post: ``/api/dev/user/{id}`` <br>
Post: ``/api/dev/user/create`` <br>
Put: ``/api/dev/user`` <br>
Delete: ``/api/dev/user?id=2`` <br>

## Status Codes

### Geralmente:
2x.... = Sucesso <br>
4x.... = Erro no cliente <br>
5x.... = Erro server side <br>

### Status comuns:
200 = Ok <br>
401 = Unauthorized <br>
403 = Forbidden <br>
404 = Not found <br>
500 = Internal Server Error <br>
504 = Gateway Timeout <br>

### Referência - [www.httpstatuses.com](www.httpstatuses.com)

<p align="center">
  README by Nathan Carvalho 🚀</b>
  <br>
</p>
