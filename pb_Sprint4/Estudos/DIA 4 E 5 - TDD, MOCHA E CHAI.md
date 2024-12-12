# DIA 4 E 5 - TDD, MOCHA E CHAI

# Guia de Instalação de Mocha e Chai

## Por que utilizamos Mocha e Chai?
Mocha e Chai são frameworks complementares! O Mocha disponibiliza a estrutura para os testes através do "describe, it, beforeEach, after" etc. O Chai disponibiliza os métodos para validarmos as informações em nossos testes como "should, expect e assert".

## 1 - TDD com Mocha e Chai: Aplicação Prática

### 1.1 - Configuração do PowerShell

1. **Abrir o PowerShell como administrador**:
   - Clique com o botão direito no ícone do PowerShell e selecione "Executar como administrador".

2. **Confirmar qual política está ativada com o comando**:
   ```bash
   Get-ExecutionPolicy
   ```

3. **Alterar a política de execução com o comando**:
   ```bash
   Set-ExecutionPolicy RemoteSigned
   ```

4. **Confirme a alteração selecionando o tipo de política que deseja**:
   - Siga as instruções na tela para confirmar a alteração.

### 1.2 - Instalando Mocha

1. **Instale o Node.js e o npm**:
   - Faça o download e instale a versão LTS (Long Term Support) do Node.js e npm [aqui](https://jeffbruchado.com.br/blog/configuracao-ambiente-nodejs-npm-vscode).

2. **Habilitar o Mocha no VSCode**:
   - No terminal, execute o comando:
     ```bash
     npm install -g mocha
     ```

3. **Configure o Mocha no seu projeto**:
   - No terminal, navegue até a pasta do seu projeto e inicialize um novo projeto Node.js:
     ```bash
     npm init -y
     ```
   - Instale o Mocha como uma dependência de desenvolvimento:
     ```bash
     npm install --save-dev mocha
     ```

4. **Crie uma estrutura de testes**:
   - Crie uma pasta chamada `test` no diretório raiz do seu projeto.
   - Dentro da pasta `test`, crie um arquivo de teste, por exemplo, `test.js`.

5. **Configure o script de teste no `package.json`**:
   - Adicione o seguinte script no seu arquivo `package.json`:
     ```json
     "scripts": {
       "test": "mocha"
     }
     ```

6. **Execute os testes**:
   - No terminal, execute o comando:
     ```bash
     npm test
     ```

### 1.3 - Caso ocorram problemas no uso do Chai com o Mocha

1. **Instale Madge**:
   ```bash
   npm install -g madge
   ```

2. **Verifique dependências circulares**:
   - Execute o comando:
     ```bash
     madge --circular "C:\Users\Norfa\Desktop\PROJETO CALCULADORA\test"
     ```
   - Se estiver tudo certo, aparecerá "✔ No circular dependency found!". Qualquer coisa fora disso é erro. O comando deve indicar o motivo.

3. **Atualize o Node.js e reinstale os módulos**:
   - Atualize o Node.js caso esteja usando uma versão antiga.
   - Reinstale os módulos:
     ```bash
     npm install chai

     rm -rf node_modules
     npm install
     ```

### Passo a Passo do Processo de Implementação do Mocha e Chai Usando a Calculadora

#### 1. Configuração do Ambiente

1. **Instale o Node.js e o npm**:
   - Faça o download e instale a versão LTS (Long Term Support) do Node.js e npm [aqui](https://nodejs.org/).

2. **Inicialize um novo projeto Node.js**:
   - No terminal, navegue até a pasta do seu projeto e inicialize um novo projeto Node.js:
     ```bash
     npm init -y
     ```

3. **Instale o Mocha e o Chai**:
   - Instale o Mocha como uma dependência de desenvolvimento:
     ```bash
     npm install --save-dev mocha
     ```
   - Instale o Chai como uma dependência de desenvolvimento:
     ```bash
     npm install --save-dev chai
     ```

#### 2. Estrutura do Projeto

1. **Crie a estrutura de pastas**:
   - Crie uma pasta chamada `src` para o código-fonte da calculadora.
   - Crie uma pasta chamada `test` para os testes.

2. **Crie o arquivo da calculadora**:
   - Dentro da pasta `src`, crie um arquivo chamado `Calculadora.js` e adicione o código da calculadora:
     ```javascript
     // Definição da classe Calculadora

     // Exportado classe calculadora no arquivo
     export default class Calculadora {
         // Método de soma 
         static soma(a, b) {
             return a + b;
         }

         // Método de subtração
         static subtracao(a, b) {
             return a - b;
         }

         // Método de multiplicação
         static multiplicacao(a, b) {
             return a * b;
         }

         // Método de divisão
         static divisao(a, b) {
             if (b === 0) {
                 throw new Error("não é permitido divisões por zero");
             }
             return a / b;
         }

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
     }
     ```

#### 3. Configuração dos Testes

1. **Crie o arquivo de testes**:
   - Dentro da pasta `test`, um arquivo chamado `test.js` é criado e adicionado o código dos testes:
     ```javascript
     import chai from 'chai';
     import Calculadora from '../src/Calculadora.js';

     const expect = chai.expect;

     describe('Calculadora', () => {

         describe('Teste 1 - Método de soma', () => {
             it('Deve somar 5 e 8 resultando em 13', () => {
                 let resultado = Calculadora.soma(5, 8);
                 expect(resultado).to.be.eq(13);
             });
         });

         describe('Teste 2 - Método de subtração', () => {
             it('Deve subtrair 5 de 8 resultando em 3', () => {
                 let resultado = Calculadora.subtracao(8, 5);
                 expect(resultado).to.be.eq(3);
             });
         });

         describe('Teste 3 - Método de multiplicação', () => {
             it('Deve multiplicar 5 por 8 resultando em 40', () => {
                 let resultado = Calculadora.multiplicacao(5, 8);
                 expect(resultado).to.be.eq(40);
             });
         });

         describe('Teste 4 - Método de divisão', () => {
             it('Deve dividir 40 por 8 resultando em 5', () => {
                 let resultado = Calculadora.divisao(40, 8);
                 expect(resultado).to.be.eq(5);
             });

             it('Deve lançar erro ao dividir por zero', () => {
                 expect(() => Calculadora.divisao(40, 0)).to.throw("não é permitido divisões por zero");
             });
         });

         describe('Teste 5 - Método de módulo', () => {
             it('Deve calcular o módulo de 10 por 3 resultando em 1', () => {
                 let resultado = Calculadora.modulo(10, 3);
                 expect(resultado).to.be.eq(1);
             });

             it('Deve lançar erro ao calcular o módulo por zero', () => {
                 expect(() => Calculadora.modulo(10, 0)).to.throw("não é permitido divisões por zero");
             });
         });

         describe('Teste 6 - Método de fatorial', () => {
             it('Deve calcular o fatorial de 5 resultando em 120', () => {
                 let resultado = Calculadora.fatorial(5);
                 expect(resultado).to.be.eq(120);
             });

             it('Deve lançar erro ao calcular o fatorial de um número negativo', () => {
                 expect(() => Calculadora.fatorial(-1)).to.throw("não é permitido calcular o fatorial de um número negativo");
             });
         });

     });
     ```

#### 4. Configuração do Script de Teste

1. **Configure o script de teste no `package.json`**:
   - Adicione o seguinte script no seu arquivo `package.json`:
     ```json
     "scripts": {
       "test": "mocha"
     }
     ```

#### 5. Execução dos Testes

1. **Execute os testes**:
   - No terminal, execute o comando:
     ```bash
     npm test
     ```

### Explicação dos Testes

1. **Importações realizadas**:
   - Importamos o `chai` e a classe `Calculadora`:
     ```javascript
     import chai from 'chai';
     import Calculadora from '../src/Calculadora.js';
     ```

2. **Estrutura de Testes feita com Mocha**:
   - Utilizamos `describe` para agrupar os testes relacionados à classe `Calculadora`:
     ```javascript
     describe('Calculadora', () => {
     ```

3. **Testes Individuais de cada método de cálculo**:
   - Cada método da calculadora é testado dentro de um bloco `describe` separado:
     ```javascript
     describe('Teste 1 - Método de soma', () => {
         it('Deve somar 5 e 8 resultando em 13', () => {
             let resultado = Calculadora.soma(5, 8);
             expect(resultado).to.be.eq(13);
         });
     });
     ```

4. **Verificações com o Chai dos testes realizados**:
   - Utilizamos `expect` do Chai para verificar os resultados dos métodos:
     ```javascript
     expect(resultado).to.be.eq(13);
     ```

5. **Exemplo de detecção de testes de erro**:
   - Verificamos se os métodos lançam erros apropriados quando necessário:
     ```javascript
     it('Deve lançar erro ao dividir por zero', () => {
         expect(() => Calculadora.divisao(40, 0)).to.throw("não é permitido divisões por zero");
     });
     ```

  