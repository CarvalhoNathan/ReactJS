# Comunicação avançada entre aplicações

## Aula 1 - Rest HTTP com React

### APIs HTTP:

- Servem para conectar a um ou mais servidores HTTP <br>
 -- GET <br>
 -- POST <br>
 -- DELETE <br>
 -- PUT <br>
- Fetch API
- Axios

### Fecth API:

- Nativa do browser
- Oferece uma alternativa ao `XMLHttpRequest()` e `Jquery.ajax()`
- Suporte a Service Workers
- Algumas diferenças
 - Não envia nem recebe cookies (precisa definir a opção credentials)
 - Não rejeita o status do erro HTTP

### Axios:

- Lib de HTTP API
- Cross-browser
- Pode monitorar o progresso de um request
- Melhor tratamento de erros
- Melhor teste

### Instalação do Axios
```js
yarn add axios
```
## Aula 2 - Imutabilidade e Redux

### Imutabilidade e Redux

- Uma vez criada, uma coleção não pode ser alterada.
- Novas coleções podem ser criadas a partir de uma coleção anterior e uma mutação (setter) como um conjunto.
- Novas coleções são criadas usando o máximo possível da estrutura original, reduzindo a cópia e aumentando a performance.

### Benefícios:

- Performance
- Programação mais simples
- Debugging mais simples (detecção de mudanças)

Se você quer performance em React, use dados imutáveis. <br>
Você consegue usando o shouldComponentUpdate ou React.PureComponent.

### Imutabilidade é pré requisito no Redux

- Redux e React-Redux utilizam comparações rasas
- Manipulação de dados mais segura
- Time-travel debugging

## Aula 3 - Redux + Rest

### Requisitos básisos 📋

- Ter feito as aulas 1 e 2
- Editor de texto
- Ter o Node.JS e React corretamente instalados
- Instalar o Redux Dev Tools no Chrome
