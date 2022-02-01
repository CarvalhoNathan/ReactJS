# Introdução ao Redux e fluxos da arquitetura com ReactJS

## Aula  1 - Introdução ao Flux

### História:

O Facebook tem uma área de notificações, que quando surge uma notificação, esse ícone precisa mostra para o usuário. 

Mas não era bem o que acontecia, porém o Facebook tinha esse grande problema que muitos usuários sofriam, com isso o Facebook criou o Flux e conseguiu resolver esse problema das notifições.

Flux é um padrão de projeto para tráfego de dados de maneira unidirecional

### Flux tem diversas implementações como:

- Redux (mais popular)
- Reflux
- Mobx
- Vuex (baseado em Redux e Elm)
- NgRx/store (baseada em Redux e RxJS)

### Bibliotecas baseadas em Flux

- Servem para comunicação entre componentes
- Centralizam a informação
- "Flux libraries are like glasses: you'll know when you need them." - Dan Abramov

## Aula 2 - O que é Redux?

- Criado por Dan Abramov e Andrew Clark em 2015
- Redux é uma implementação de Flux
- Ambos possuem algumas diferenças

3 princípios:

1. Singles source of truth: Uma única store
2. State é read-only
3. Mudanças são feitas com pure functions

## Aula 3 - Redux + React

Instalando o Redux
```js
npm install react-redux
npm install --save-dev redux-devtools
```
### Requisitos básicos 📋

- Ter feito a aula 1
- Editor de texto
- Ter o Node.js e React corretamente instalados
- Instalar o Redux Dev Tools no Chrome
