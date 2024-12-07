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

# Declaração de Variáveis (let, const, var)

## Sintaxe da Variável `let`
```javascript
let nomeDaVariavel = 5;
console.log(nomeDaVariavel);
```

## Formas que Não Podem Ser Declaradas uma Variável

### Nomes de Variáveis Inválidos:
- Não podem começar com números (ex: `1variavel`).
- Não podem conter espaços (ex: `nome da variavel`).
- Não podem usar palavras reservadas (ex: `let`, `const`, `var`).

### Sintaxe Incorreta:
- Falta de ponto e vírgula ao final da declaração (embora não seja obrigatório, é uma boa prática).
- Uso de caracteres especiais não permitidos (ex: `nome@variavel`).

## Dicas e Boas Práticas:

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

# Constante

Constantes são variáveis cujo valor não pode ser alterado após a sua inicialização. Em JavaScript, utilizamos a palavra-chave `const` para declarar uma constante.

## Sintaxe para Declaração de Constantes
```javascript
const nomeDaConstante = valor;
```

### Exemplo:
```javascript
const PI = 3.14159;
console.log(PI);
```

## Dicas e Boas Práticas

1. **Nomes Significativos**:
   - Use nomes que descrevam claramente o propósito da constante (ex: `TAXA_DE_JUROS`).

2. **Letras Maiúsculas**:
   - Utilize letras maiúsculas para nomear constantes, separando palavras com sublinhados (ex: `PI_VALOR`).

3. **Inicialização Imediata**:
   - Sempre inicialize a constante no momento da declaração.

4. **Imutabilidade**:
   - Lembre-se que o valor de uma constante não pode ser alterado após a sua atribuição inicial.

### Exemplos de Uso de Constantes
```javascript
const TAXA_DE_JUROS = 0.05;
const ANO_ATUAL = 2024;

console.log(`A taxa de juros é ${TAXA_DE_JUROS * 100}%`);
console.log(`Estamos no ano de ${ANO_ATUAL}`);
```

## Vantagens de Usar Constantes

1. **Legibilidade**:
   - Facilita a leitura e compreensão do código, pois os nomes das constantes indicam claramente seu propósito.

2. **Manutenção**:
   - Facilita a manutenção do código, pois valores que não mudam estão centralizados e podem ser alterados em um único lugar.

3. **Prevenção de Erros**:
   - Evita a alteração acidental de valores que não devem ser modificados.

# Tipos Primitivos

Tipos primitivos são os tipos de dados mais básicos e fundamentais em JavaScript. Eles são imutáveis, o que significa que seu valor não pode ser alterado após a criação.

## Tipos Primitivos em JavaScript:

1. **String**:
   - Representa uma sequência de caracteres.
   - Exemplo:
     ```javascript
     const nome = "João";
     console.log(nome); // João
     ```

2. **Number**:
   - Representa números, incluindo inteiros e decimais.
   - Exemplo:
     ```javascript
     const idade = 30;
     const altura = 1.75;
     console.log(idade); // 30
     console.log(altura); // 1.75
     ```

3. **Boolean**:
   - Representa um valor lógico: `true` ou `false`.
   - Exemplo:
     ```javascript
     const isAdulto = true;
     const isEstudante = false;
     console.log(isAdulto); // true
     console.log(isEstudante); // false
     ```

4. **Undefined**:
   - Representa uma variável que foi declarada, mas não inicializada.
   - Exemplo:
     ```javascript
     let endereco;
     console.log(endereco); // undefined
     ```

5. **Null**:
   - Representa a ausência intencional de qualquer valor.
   - Exemplo:
     ```javascript
     const carro = null;
     console.log(carro); // null
     ```

# Outros Tipos

## Symbol
- Representa um valor único e imutável, frequentemente usado como identificador de propriedades de objetos.
- Exemplo:
  ```javascript
  const id = Symbol('id');
  console.log(id); // Symbol(id)
  ```

## BigInt
- Representa números inteiros de precisão arbitrária.
- Exemplo:
  ```javascript
  const grandeNumero = BigInt(123456789012345678901234567890);
  console.log(grandeNumero); // 123456789012345678901234567890n
  ```

# Boas Práticas ao Utilizar Tipos Primitivos

1. **Escolha o Tipo Correto**:
   - Utilize o tipo de dado que melhor representa a informação que você está armazenando.

2. **Inicialização**:
   - Sempre inicialize variáveis ao declará-las para evitar valores `undefined`.

3. **Consistência**:
   - Mantenha a consistência no uso de tipos de dados para evitar erros e facilitar a manutenção do código.

# Exemplos de Uso de Tipos Primitivos
```javascript
const nome = "Ana";
const idade = 25;
const isEstudante = true;
let endereco;
const carro = null;
const id = Symbol('id');
const grandeNumero = BigInt(987654321098765432109876543210);

console.log(nome); // Ana
console.log(idade); // 25
console.log(isEstudante); // true
console.log(endereco); // undefined
console.log(carro); // null
console.log(id); // Symbol(id)
console.log(grandeNumero); // 987654321098765432109876543210n
```

# Tipagem Dinâmica em JavaScript

## O que é Tipagem Dinâmica?
Tipagem dinâmica significa que o tipo de uma variável é determinado em tempo de execução, e não em tempo de compilação. Em JavaScript, você não precisa declarar explicitamente o tipo de uma variável; o interpretador do JavaScript determina o tipo com base no valor atribuído à variável.

### Exemplos de Tipagem Dinâmica
```javascript
let variavel = 42; // Inicialmente, 'variavel' é um número
console.log(typeof variavel); // "number"

variavel = "Olá, mundo!"; // Agora, 'variavel' é uma string
console.log(typeof variavel); // "string"

variavel = true; // Agora, 'variavel' é um booleano
console.log(typeof variavel); // "boolean"
```

### Vantagens da Tipagem Dinâmica
1. **Flexibilidade**:
   - Permite que variáveis mudem de tipo conforme necessário, facilitando a manipulação de dados de diferentes tipos.

2. **Menos Código**:
   - Não é necessário declarar explicitamente o tipo de cada variável, o que pode reduzir a quantidade de código.

### Desvantagens da Tipagem Dinâmica
1. **Erros em Tempo de Execução**:
   - Erros de tipo podem não ser detectados até que o código seja executado, o que pode dificultar a depuração.

2. **Legibilidade**:
   - Pode ser mais difícil entender o tipo de dados que uma variável deve conter, especialmente em códigos grandes e complexos.

### Boas Práticas ao Trabalhar com Tipagem Dinâmica
1. **Nomes de Variáveis Descritivos**:
   - Use nomes de variáveis que indiquem claramente o tipo de dados esperado (ex: `idadeUsuario`).

2. **Comentários**:
   - Adicione comentários ao código para esclarecer o tipo de dados esperado, especialmente em funções e métodos.

3. **Testes**:
   - Implemente testes para verificar que as variáveis contêm os tipos de dados esperados.

### Exemplos de Uso de Tipagem Dinâmica
```javascript
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 10)); // 15 (números)
console.log(soma("5", "10")); // "510" (strings)
console.log(soma(5, "10")); // "510" (número e string)
```

# Objetos/Arrays/Functions

## O que são Objetos?
Objetos são coleções de propriedades, onde cada propriedade é uma associação entre um nome (ou chave) e um valor. Eles são uma das principais formas de armazenar e manipular dados em JavaScript.

### Sintaxe para Criar um Objeto
```javascript
const pessoa = {
    nome: "Ana",
    idade: 30,
    profissao: "Engenheira"
};
console.log(pessoa);

let pessoa = {
    nome: "Ana",
    idade: 30,
    profissao: "Engenheira"
};
console.log(pessoa);
```

### Acessando Propriedades de um Objeto
1. **Notação de Ponto**:
   - Exemplo:
     ```javascript
     console.log(pessoa.nome); // Ana
     ```

2. **Notação de Colchetes**:
   - Exemplo:
     ```javascript
     console.log(pessoa["idade"]); // 30
     ```

### Adicionando e Modificando Propriedades
1. **Adicionar Propriedade**:
   - Exemplo:
     ```javascript
     pessoa.email = "ana@example.com";
     console.log(pessoa.email); // ana@example.com
     ```

2. **Modificar Propriedade**:
   - Exemplo:
     ```javascript
     pessoa.idade = 31;
     console.log(pessoa.idade); // 31
     ```

### Removendo Propriedades
```javascript
delete pessoa.profissao;
console.log(pessoa.profissao); // undefined
```

### Métodos em Objetos
Métodos são funções associadas a objetos. Eles podem ser definidos como propriedades de um objeto.
```javascript
const pessoa = {
    nome: "Ana",
    idade: 30,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}`;
    }
};
console.log(pessoa.saudacao()); // Olá, meu nome é Ana
```

### Iterando sobre Propriedades de um Objeto
1. **For...in**:
   - Exemplo:
     ```javascript
     for (let chave in pessoa) {
         console.log(`${chave}: ${pessoa[chave]}`);
     }
     ```

### Clonando Objetos
1. **Object.assign()**:
   - Exemplo:
     ```javascript
     const copiaPessoa = Object.assign({}, pessoa);
     console.log(copiaPessoa);
     ```

2. **Spread Operator**:
   - Exemplo:
     ```javascript
     const copiaPessoa = { ...pessoa };
     console.log(copiaPessoa);
     ```

### Boas Práticas ao Trabalhar com Objetos
1. **Nomes de Propriedades Descritivos**:
   - Use nomes que descrevam claramente o propósito da propriedade.

2. **Evite Propriedades Globais**:
   - Sempre que possível, mantenha as propriedades dentro do escopo onde serão usadas.

3. **Imutabilidade**:
   - Considere usar bibliotecas como `Immutable.js` para garantir que os objetos não sejam modificados inadvertidamente.
 
# Exemplos de Código em JavaScript

## 1 - Variável `let`
```javascript
let nomeDaVariavel = 10;
console.log(nomeDaVariavel);
```

## 2 - Variável `const`
```javascript
const nomeDaConstante = 10;
const PI = 3.14159;

console.log(nomeDaConstante);
console.log(PI);

const TAXA_DE_JUROS = 13;
const ANO_ATUAL = 2024;
console.log(`A taxa de juros atual é ${TAXA_DE_JUROS * 100}%`);
console.log(`Estamos no ano de ${ANO_ATUAL}`);
```

## 3 - Tipos Primitivos de Dados

### Tipo 1 - String
```javascript
const nome = "Norfan";
const idade = "25";
const altura = "1,70";

console.log(nome);
console.log(idade);
console.log(altura);
```

### Tipo 2 - Boolean
```javascript
const isAprovado = true;
const isReprovado = false;

console.log(isAprovado);
console.log(isReprovado);
```

### Tipo 3 - Null
```javascript
const xbox = null;
console.log(xbox);
```

### Tipo 4 - Undefined
```javascript
let endereco;
console.log(endereco);
```

## 4 - Objetos
```javascript
const pessoa = {
    nome: "Norfan",
    idade: "25",
    altura: "1,70",
    isAprovado: "true"
};
console.log(pessoa);

/// Alterando propriedades do objeto
pessoa.idade = "40";
console.log(pessoa.idade);
```

## 5 - Arrays
```javascript
let produtoId = [26, 45, 50, 18, 24];
console.log(produtoId);
console.log(produtoId[3]);
```

## 6 - Functions

### Verbo + Substantivo
#### Exemplo - Resetar + Key (chave)
```javascript
let keyPass1 = "1234";
function resetaKey(novaKey) {
    keyPass1 = novaKey;
}
console.log(keyPass1); // "1234"
resetaKey("12345678");
console.log(keyPass1); // "12345678");
```

## 7 - Tipos de Funções

### Realizar tarefa sem devolver algum retorno para ser utilizada
```javascript
function dizerNome() {
    console.log('Norfan');
}
dizerNome();
```

### Realizar uma tarefa devolvendo um retorno que será utilizada para alterar algo
```javascript
function MultiplicarPorCem(valor) {
    return valor * 100;
}
console.log(MultiplicarPorCem(10));
let resultado = MultiplicarPorCem(10);
console.log(resultado);
```

## 8 - Operadores para Cálculo (variáveis e operadores para criar lógica nos aplicativos)

### Aritiméticos básicos (matemáticos)
```javascript
let valorA = 100;
let valorB = 20;
let valorC = 200;
console.log(valorA + valorB);
console.log(valorA - valorB);
console.log(valorA * valorB);
console.log(valorA / valorB);
console.log(5 ** 5);
```

### Operadores de incremento e decremento (++ e --)
```javascript
console.log(++valorA);
console.log(--valorB);
```

### Operadores de Atribuição ( = , += , )
```javascript
valorC += valorC;
console.log(valorC);
```

# Fundamentos de JavaScript com Exemplo de Calculadora

## Definição da Classe Calculadora

### Exportação da Classe
```javascript
// Exportado classe calculadora no arquivo
export default class Calculadora {
```
- **Exportação**: A palavra-chave `export default` é usada para exportar a classe `Calculadora` para que possa ser importada em outros arquivos.
- **Classe**: A palavra-chave `class` é usada para definir uma classe em JavaScript. Uma classe é um modelo para criar objetos com propriedades e métodos.

### Métodos da Classe
#### Método de Soma
```javascript
    // Método de soma 
    static soma(a, b) {
        return a + b;
    }
```
- **Método Estático**: A palavra-chave `static` define um método estático que pode ser chamado diretamente na classe, sem a necessidade de instanciar um objeto.
- **Parâmetros**: `a` e `b` são os parâmetros do método, que representam os números a serem somados.
- **Retorno**: O método retorna a soma de `a` e `b`.

#### Método de Subtração
```javascript
    // Método de subtração
    static subtracao(a, b) {
        return a - b;
    }
```
- **Operação de Subtração**: Similar ao método de soma, mas realiza a subtração de `b` de `a`.

#### Método de Multiplicação
```javascript
    // Método de multiplicação
    static multiplicacao(a, b) {
        return a * b;
    }
```
- **Operação de Multiplicação**: Realiza a multiplicação de `a` por `b`.

#### Método de Divisão
```javascript
    // Método de divisão
    static divisao(a, b) {
        if (b === 0) {
            throw new Error("não é permitido divisões por zero");
        }
        return a / b;
    }
```
- **Verificação de Divisão por Zero**: Verifica se `b` é igual a zero e lança um erro se for o caso, pois a divisão por zero não é permitida.
- **Operação de Divisão**: Realiza a divisão de `a` por `b`.

#### Método de Módulo
```javascript
    // Método de módulo
    static modulo(a, b) {
        if (b === 0) {
            throw new Error("não é permitido divisões por zero");
        }
        let resultado = a;
        while (resultado >= b) {
            resultado -= b;
        }
        return resultado;
    }
```
- **Verificação de Divisão por Zero**: Similar ao método de divisão.
- **Operação de Módulo**: Calcula o resto da divisão de `a` por `b` utilizando um loop `while`.

#### Método de Fatorial
```javascript
    // Método de fatorial
    static fatorial(n) {
        if (n < 0) {
            throw new Error("não é permitido calcular o fatorial de um número negativo");
        }
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
```
- **Verificação de Número Negativo**: Verifica se `n` é negativo e lança um erro se for o caso, pois o fatorial de um número negativo não é definido.
- **Operação de Fatorial**: Calcula o fatorial de `n` utilizando um loop `for`.
 
- **Observalçao**: No próximo módulo, será aplicado os métodos de teste MOCHA e CHAI para testar este código desenvolvido.