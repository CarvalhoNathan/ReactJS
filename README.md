# Introdução ao ReactJS (Anotações sobre as aulas) 📋

## Anotações feita durante as aulas do cursos:

### Repositórios dos cursos ⬇

- [Introdução ao ReactJS](https://github.com/CarvalhoNathan/ReactJS#readme)
- [Desenvolvimento de aplicações para internet com ReactJS](https://github.com/CarvalhoNathan/ReactJS/tree/main/WebApplications)
- [Introdução ao Redux](https://github.com/CarvalhoNathan/ReactJS/tree/main/Redux)
- [Conceitos aplicados a qualidade de código e automação de testes](https://github.com/CarvalhoNathan/ReactJS/tree/main/ReactTest)

### Requisitos basicos 📋
- JavaScript
- CSS
- HTML
- Editor de texto
- Ter o Node.js e ReactJS corretamente

## Aula 1️⃣ - História e Conceitos

"Uma biblioteca JavaScript para criar interfaces de usuário" - ReactJS

### - Alguns conceitos sobre o React:

React é uma biblioteca e não um framework, a principal função é a criação da interface para o usuário.
React é uma linguagem declarativa, assim como o React está preocupado apenas com o que é exibido na interface do usuário.
React é baseado em componentes e pode ser utilizado em qualquer lugar (Computador, celular, tablet e etc).

### - Histórias sobre o React:

React foi criado em `2011` por Jordan Walke no Facebook, e era utilizado no mural de notícias do Facebook; <br>
Baseado no XHP, um framework para criação de HTML no PHP; <br>

`2012` - Utilizado no Instragram <br>
`2013` - Anúncio para liberação OpenSource na JSConf US <br>
`2015` - React Native <br>
`2015` - UWP (Universal Windows Platform)

## Aula 2️⃣ - Configuração do React

- React Create App
- React Scripts
- Task Runners e Bundler Sizers

## Aula 3️⃣ - O que é JSX?

```js
const element = <h1> Hello, world! </h1>;
```

JSX não é um arquivo HTML e nem uma string!

React não separa as tecnologias colocando marcação em arquivos separados, e sim separa conceitos e mantém o código pouco acoplado chamando-os de componentes.

Não é obrigatório a utilização do JSX. ⚠

Sintax Suggar para React.createElement

O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel.

## Aula 4️⃣ - Renderização

- Renderização de Elementos
- React DOM
- Nós Raíz

React "pensa" em como a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que faz ter ganho de performance e evita uma série de erros.

## Aula 5️⃣ - Componentes e Props

- Função e Classe
- Props
- Composição de componentes
- Extração de componentes

## Aula 6️⃣ - Estado e Ciclo de Vida

1️⃣ Inicialização <br>
2️⃣ Montagem <br>
3️⃣ Atualização <br>
4️⃣ Desmontagem

Nenhum componente pai ou filho devem saber se outro componente possui estado ou não.

O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via props.

## Aula 7️⃣ - Ecossistema

- React Router
- Redux
- Material UI
- Ant-Design
- Storybook
- Gatsby
- Jest
- React i18n Next

<p align="center">
  README by Nathan Carvalho 🚀</b>
  <br>
</p>
