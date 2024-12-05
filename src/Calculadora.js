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


