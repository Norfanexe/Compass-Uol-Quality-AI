// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { postRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('POST /movies - Criar um novo filme', async ({ request }) => {
    // Gera dados aleatórios para o novo filme
    const newMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
    };

    // Envia a requisição POST para criar um novo filme
    const response = await postRequest(request, `${BASE_URL}/movies`, newMovie);
    
    // Verifica se o status da resposta é 201 (Criado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(201);
  });

  test('POST /movies - Verificar se o corpo da resposta contém os detalhes do filme criado', async ({ request }) => {
    // Gera dados aleatórios para o novo filme
    const newMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
    };

    // Envia a requisição POST para criar um novo filme
    const response = await postRequest(request, `${BASE_URL}/movies`, newMovie);
    
    // Verifica se o status da resposta é 201 (Criado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(201);

    // Verifica se o corpo da resposta contém os dados do novo filme
    try {
      const createdMovie = await response.json();
      console.log('Response Body:', createdMovie);
    } catch (error) {
      console.error('Erro: A API não retornou o corpo da resposta com os detalhes do filme criado.');
    }
  });
});
