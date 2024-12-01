# DIA 4 - FUNDAMENTOS PARA JAVASCRIPT

## CONTEÚDO:

* Introdução a JavaScript
* Declaração de Variáveis (let, const, var)

JavaScript é uma linguagem de programação extremamente versátil, usada principalmente para criar interatividade em sites e aplicativos web. Ela é executada tanto no navegador (frontend) quanto no servidor (backend) através de plataformas como Node.js.

## Uso Principal
Desenvolvimento web (front-end e back-end).

### Vantagens:
- Muito utilizado e com uma grande comunidade de suporte.
- Versátil, pode ser usado tanto no lado do cliente (navegador) quanto no lado do servidor (Node.js).
- Muitas bibliotecas e frameworks (React, Angular, Vue.js).

### Desvantagens:
- Pode ser confuso para iniciantes devido à sua flexibilidade.
- Menos eficiente para tarefas que exigem alto desempenho.

# 1 - Declaração de Variáveis (let, const, var)

## Sintaxe da Variável `let`

```javascript
let nomeDaVariavel = 5;
console.log(nomeDaVariavel);
```

## Formas que Não Podem Ser Declaradas uma Variável

### 1 - Nomes de Variáveis Inválidos:
- Não podem começar com números (ex: `1variavel`).
- Não podem conter espaços (ex: `nome da variavel`).
- Não podem usar palavras reservadas (ex: `let`, `const`, `var`).

### 2 - Sintaxe Incorreta:
- Falta de ponto e vírgula ao final da declaração (embora não seja obrigatório, é uma boa prática).
- Uso de caracteres especiais não permitidos (ex: `nome@variavel`).

## Boas Práticas para Declarar uma Variável

### Nomes Significativos:
- Use nomes de variáveis que descrevam claramente o propósito da variável (ex: `idadeUsuario` em vez de `x`).

### Camel Case:
- Utilize a convenção camelCase para nomear variáveis (ex: `nomeCompleto`).

### Evite Variáveis Globais:
- Sempre que possível, declare variáveis dentro do escopo onde serão usadas para evitar conflitos.

### Constantes:
- Use `const` para variáveis que não mudarão de valor após serem atribuídas.

### Inicialização:
- Sempre inicialize variáveis ao declará-las para evitar valores `undefined`.