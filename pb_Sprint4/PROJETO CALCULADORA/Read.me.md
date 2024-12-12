# Calculadora em JavaScript

## Descrição
Esta é uma calculadora simples desenvolvida em JavaScript que realiza operações matemáticas básicas como soma, subtração, multiplicação, divisão, módulo e fatorial. A calculadora foi criada com o objetivo de demonstrar conceitos fundamentais de programação e testes automatizados pelo mocha e chai.

## Funcionalidades
- Soma
- Subtração
- Multiplicação
- Divisão
- Módulo
- Fatorial

## Estrutura do Projeto
O projeto está organizado da seguinte forma:
```
/src
  └── Calculadora.js
/test
  └── test.js
```

## Instalação
Para executar este projeto, você precisará ter o Node.js e o npm instalados em sua máquina.

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd <NOME_DO_DIRETORIO>
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso
### Calculadora
O arquivo `Calculadora.js` contém a definição da classe `Calculadora` com os métodos para realizar as operações matemáticas.

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

### Testes
O arquivo `test.js` contém os testes automatizados para a classe `Calculadora`, utilizando Mocha e Chai.

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

### Executando os Testes
Para executar os testes, utilize o seguinte comando:
```bash
npm test
```

## Tabela de Decisão para a Calculadora

| Condição                                      | Ação Esperada                                      | Resultado Esperado                                |
|-----------------------------------------------|---------------------------------------------------|--------------------------------------------------|
| **Método de Soma**                            |                                                   |                                                  |
| a = 5, b = 8                                  | Calculadora.soma(a, b)                            | 13                                               |
| a = -5, b = 8                                 | Calculadora.soma(a, b)                            | 3                                                |
| a = 0, b = 0                                  | Calculadora.soma(a, b)                            | 0                                                |
| **Método de Subtração**                       |                                                   |                                                  |
| a = 8, b = 5                                  | Calculadora.subtracao(a, b)                       | 3                                                |
| a = 5, b = 8                                  | Calculadora.subtracao(a, b)                       | -3                                               |
| a = 0, b = 0                                  | Calculadora.subtracao(a, b)                       | 0                                                |
| **Método de Multiplicação**                   |                                                   |                                                  |
| a = 5, b = 8                                  | Calculadora.multiplicacao(a, b)                   | 40                                               |
| a = -5, b = 8                                 | Calculadora.multiplicacao(a, b)                   | -40                                              |
| a = 0, b = 8                                  | Calculadora.multiplicacao(a, b)                   | 0                                                |
| **Método de Divisão**                         |                                                   |                                                  |
| a = 40, b = 8                                 | Calculadora.divisao(a, b)                         | 5                                                |
| a = 40, b = 0                                 | Calculadora.divisao(a, b)                         | Lançar erro "não é permitido divisões por zero"  |
| a = 0, b = 8                                  | Calculadora.divisao(a, b)                         | 0                                                |
| **Método de Módulo**                          |                                                   |                                                  |
| a = 10, b = 3                                 | Calculadora.modulo(a, b)                          | 1                                                |
| a = 10, b = 0                                 | Calculadora.modulo(a, b)                          | Lançar erro "não é permitido divisões por zero"  |
| a = 0, b = 3                                  | Calculadora.modulo(a, b)                          | 0                                                |
| **Método de Fatorial**                        |                                                   |                                                  |
| n = 5                                         | Calculadora.fatorial(n)                           | 120                                              |
| n = -1                                        | Calculadora.fatorial(n)                           | Lançar erro "não é permitido calcular o fatorial de um número negativo" |
| n = 0                                         | Calculadora.fatorial(n)                           | 1                                                |

## Contribuição
Agradeço a toda minha equipe e time compass pelo apoio no desenvolvimento do meu primeiro projeto backend básico, muito obrigado!