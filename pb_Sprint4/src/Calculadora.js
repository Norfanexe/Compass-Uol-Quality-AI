// Definição da classe Calculadora
// Exporta a classe Calculadora para uso em outros módulos
export default class Calculadora {
    
    /**
     * Método para somar dois números
     * @param {number} a - Primeiro número
     * @param {number} b - Segundo número
     * @returns {number} - Resultado da soma de a e b
     */
    static soma(a, b) {
        return a + b;
    }

    /**
     * Método para subtrair dois números
     * @param {number} a - Minuendo
     * @param {number} b - Subtraendo
     * @returns {number} - Resultado da subtração de b de a
     */
    static subtracao(a, b) {
        return a - b;
    }

    /**
     * Método para multiplicar dois números
     * @param {number} a - Primeiro fator
     * @param {number} b - Segundo fator
     * @returns {number} - Resultado da multiplicação de a por b
     */
    static multiplicacao(a, b) {
        return a * b;
    }

    /**
     * Método para dividir dois números
     * @param {number} a - Dividendo
     * @param {number} b - Divisor
     * @returns {number} - Resultado da divisão de a por b
     * @throws {Error} - Lança um erro se b for igual a zero
     */
    static divisao(a, b) {
        if (b === 0) {
            throw new Error("não é permitido divisões por zero");
        }
        return a / b;
    }

    /**
     * Método para calcular o módulo de dois números
     * @param {number} a - Dividendo
     * @param {number} b - Divisor
     * @returns {number} - Resto da divisão de a por b
     * @throws {Error} - Lança um erro se b for igual a zero
     */
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

    /**
     * Método para calcular o fatorial de um número
     * @param {number} n - Número para calcular o fatorial
     * @returns {number} - Fatorial de n
     * @throws {Error} - Lança um erro se n for negativo
     */
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

