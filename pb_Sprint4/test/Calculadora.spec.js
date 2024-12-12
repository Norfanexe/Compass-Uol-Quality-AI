import assert from 'assert';
import chai from 'chai';
import Calculadora from '../src/Calculadora.js';

const expect = chai.expect;

describe('Calculadora', () => {

    /**
     * Teste para o método de soma
     * Verifica se a soma de 5 e 8 resulta em 13
     */
    describe('Teste 1 - Método de soma', () => {
        it('Deve somar 5 e 8 resultando em 13', () => {
            let resultado = Calculadora.soma(5, 8);
            expect(resultado).to.be.eq(13);
        });
    });

    /**
     * Teste para o método de subtração
     * Verifica se a subtração de 5 de 8 resulta em 3
     */
    describe('Teste 2 - Método de subtração', () => {
        it('Deve subtrair 5 de 8 resultando em 3', () => {
            let resultado = Calculadora.subtracao(8, 5);
            expect(resultado).to.be.eq(3);
        });
    });

    /**
     * Teste para o método de multiplicação
     * Verifica se a multiplicação de 5 por 8 resulta em 40
     */
    describe('Teste 3 - Método de multiplicação', () => {
        it('Deve multiplicar 5 por 8 resultando em 40', () => {
            let resultado = Calculadora.multiplicacao(5, 8);
            expect(resultado).to.be.eq(40);
        });
    });

    /**
     * Testes para o método de divisão
     * Verifica se a divisão de 40 por 8 resulta em 5
     * Verifica se a divisão por zero lança um erro
     */
    describe('Teste 4 - Método de divisão', () => {
        it('Deve dividir 40 por 8 resultando em 5', () => {
            let resultado = Calculadora.divisao(40, 8);
            expect(resultado).to.be.eq(5);
        });

        it('Deve lançar erro ao dividir por zero', () => {
            expect(() => Calculadora.divisao(40, 0)).to.throw("não é permitido divisões por zero");
        });
    });

    /**
     * Testes para o método de módulo
     * Verifica se o módulo de 10 por 3 resulta em 1
     * Verifica se o cálculo do módulo por zero lança um erro
     */
    describe('Teste 5 - Método de módulo', () => {
        it('Deve calcular o módulo de 10 por 3 resultando em 1', () => {
            let resultado = Calculadora.modulo(10, 3);
            expect(resultado).to.be.eq(1);
        });

        it('Deve lançar erro ao calcular o módulo por zero', () => {
            expect(() => Calculadora.modulo(10, 0)).to.throw("não é permitido divisões por zero");
        });
    });

    /**
     * Testes para o método de fatorial
     * Verifica se o fatorial de 5 resulta em 120
     * Verifica se o cálculo do fatorial de um número negativo lança um erro
     */
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

