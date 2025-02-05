
const { test, expect } = require('@playwright/test');
const crypto = require('crypto');

const baseUrl = 'http://localhost:3000';
let token = '';

// 1 - Definição de autenticação, variáveis e funções
// Método beforeAll de autenticação para gerar o token
test.beforeAll(async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
        data: {
            email: 'fulano@qa.com',
            password: 'teste1234'
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    token = body.authorization;
    expect(token).toBeTruthy();
});

// Função generateRandomUser para gerar dados dinâmicos e automatizar os testes
function generateRandomUser() {
    const randomString = crypto.randomBytes(4).toString('hex');
    return {
        nome: `Usuário ${randomString}`,
        email: `usuario_${randomString}@qa.com`,
        password: '12345',
        administrador: 'true'
    };
}


test.describe('/usuarios API Tests', () => {

    test('GET /usuarios - Listar usuários cadastrados', async ({ request }) => {
        const response = await request.get(`${baseUrl}/usuarios`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.quantidade).toBeGreaterThanOrEqual(0);
    });

    test('POST /usuarios - Cadastrar usuário', async ({ request }) => {
        const novoUsuario = generateRandomUser();

        const response = await request.post(`${baseUrl}/usuarios`, {
            data: novoUsuario,
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status() === 400) {
            const body = await response.json();
            expect(body.message).toContain('E-mail já está sendo usado');
        } else {
            expect(response.status()).toBe(201);
            const body = await response.json();
            expect(body.message).toBe('Cadastro realizado com sucesso');
        }
    });

    test('GET /usuarios/:id - Buscar usuário por ID', async ({ request }) => {
        const novoUsuario = generateRandomUser();

        const postResponse = await request.post(`${baseUrl}/usuarios`, {
            data: novoUsuario,
            headers: { Authorization: `Bearer ${token}` }
        });

        const bodyPost = await postResponse.json();
        const userId = bodyPost._id;

        const response = await request.get(`${baseUrl}/usuarios/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status() === 400) {
            const body = await response.json();
            expect(body.message).toContain('Usuário não encontrado');
        } else {
            expect(response.status()).toBe(200);
            const body = await response.json();
            expect(body.nome).toBe(novoUsuario.nome);
        }
    });

    test('DELETE /usuarios/:id - Excluir usuário', async ({ request }) => {
        const novoUsuario = generateRandomUser();

        const postResponse = await request.post(`${baseUrl}/usuarios`, {
            data: novoUsuario,
            headers: { Authorization: `Bearer ${token}` }
        });

        const bodyPost = await postResponse.json();
        const userId = bodyPost._id;

        const response = await request.delete(`${baseUrl}/usuarios/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status() === 400) {
            const body = await response.json();
            expect(body.message).toContain('Usuário não encontrado');
        } else {
            expect(response.status()).toBe(200);
            const body = await response.json();
            expect(body.message).toBe('Registro excluído com sucesso');
        }
    });

    test('PUT /usuarios/:id - Editar usuário', async ({ request }) => {
        const novoUsuario = generateRandomUser();

        const postResponse = await request.post(`${baseUrl}/usuarios`, {
            data: novoUsuario,
            headers: { Authorization: `Bearer ${token}` }
        });

        const bodyPost = await postResponse.json();
        const userId = bodyPost._id;

        const dadosAtualizados = {
            nome: `Usuário Editado ${crypto.randomBytes(2).toString('hex')}`,
            email: novoUsuario.email,
            password: '321987',
            administrador: 'true'
        };

        const response = await request.put(`${baseUrl}/usuarios/${userId}`, {
            data: dadosAtualizados,
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status() === 400) {
            const body = await response.json();
            expect(body.message).toContain('E-mail já está sendo usado');
        } else {
            expect(response.status()).toBe(200);
            const body = await response.json();
            expect(body.message).toBe('Registro alterado com sucesso');
        }
    });
});
