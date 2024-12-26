// @ts-check
const { test, expect } = require('@playwright/test');

const baseURL = 'http://localhost:3000';

test.describe('Rota Login', () => {
  test('Teste 1 - GET usuários', async ({ request }) => {
    let response = await request.get(`${baseURL}/usuarios`);
    let jsonResponse = await response.json();

    console.log(jsonResponse);

    expect(jsonResponse).toHaveProperty('usuarios');
    expect(jsonResponse).toHaveProperty('quantidade');
  });

  test('Teste 2 - POST usuários', async ({ request }) => {
    // Adicione o código para o teste POST aqui
  });

  test('Teste 3 - PUT usuários', async ({ request }) => {
    // Adicione o código para o teste PUT aqui
  });

  test('Teste 4 - DELETE usuários', async ({ request }) => {
    // Adicione o código para o teste DELETE aqui
  });
});

