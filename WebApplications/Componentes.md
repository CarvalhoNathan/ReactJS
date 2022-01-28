# Desenvolvimento de aplicações para internet com ReactJS

Requisitos básicos

- Ter feito o curso "Introdução ao ReactJS" e "Programação para internet com HTML5 e CSS3"
- Editor de texto
- Ter o Node.js e React corretamente

## Aula 1 - CSS componentes e elementos

### Maneiras de estilização

## 1. Inline
```js
const divStyle = {
 color: 'blue',
 backgroundImage: 'url(' + imgUrl + ')'
};
function HelloWorldComponent() {
 return <div style={divStyle}>Hello World!</div>;
}

function App() {
 return (
  <HelloWorld style={{ marginTop: '10px' }} />
 )
}
```

#### Prós: ✔
- Maneira mais prática e direta
- Ajustes rápidos
- Testes de estilo

#### Contras: ❌
- Difícil manuntenção

## 2. Classes
```js
.div-style {
 color: blue;
 background: url('https://google.com');
}

import '.HelloWorldComponent.css';

function HelloWorldComponent() {
 return <div className="div-style">Hello World!</div>;
}
```

Em JSX, define-se classes pelo atributo className, sendo a maneira mais prática e direta. ✔

#### Contras: ❌
- Difícil manuntenção
- Pouca flexibilidade
- Conflitos com nomes

## 3. CSS in JS
```js
npm install --save styled-components
```
```js
const DivStyle = style.div`
 color: blue;
 background: url('${props => props.imageUrl}');
`;

function HelloWorldComponents() {
 const url = 'https://google.com';
 return <DivStyle imageUrl=(url)>Hello World</DivStyle>;
}
```

#### Vantagens: ✔
- Manuntenção (Estilos dinâmicos e facilidade para remover CSS)
- Performance
- Injeção automática de prefixos vendor

Aula 2 - Stateful vs. stateless
Aula 3 - Formulários
