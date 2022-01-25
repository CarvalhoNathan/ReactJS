# Aula 1 - O que é webpack?

É um module bundler (um empacotador de módulos para aplicações JS)

Gerar bundler que será utilizado no HTML, em ES5.

### Link oficial: https://webpack.js.org/

### Suporte do Webpack:

- Fontes
- CSS
- Imagens
- HTML
- JS
- Plugins

# Aula 2 - Configuração

Principais conceitos do Webpack:

### Entry:
> Utilizado grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências.

### Output:
> É para determinar quais são os bundlers que o Webpack irá emitir.

### Loaders:
> É para permitir que o Webpack gerencie arquivos não são Javascript.

### Plugins:
> Plugins podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais.

### Mode:
> Utilizados para abordagem de configuração zero. É possível configurar módulos como production, development ou none.

**- Production** trás otimizações internas.

**- Development** é executado com três plugins: **UglifyJsPlugin**, **ModuleConcatenationPlugin** e **NoEmitOnErrorsPlugin**.

## Configuração para criação do arquivo webpack.config.js
```js
npm i -D webpack webpack-cli
"build": "webpack --mode production"

npm i @babel/core babel-loader @babel/preset-env
@babel/preset-react --save-dev
```
# Aula 3 - Criando um Dev Server
# Aula 4 - EsLint

Requistios básicos

- Editor de texto
- NPM
