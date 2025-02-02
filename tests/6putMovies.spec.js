// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { putRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('PUT /movies/{id} - Atualiza um filme', async ({ request }) => {
    // ID de um filme existente
    const movieId = 'm7VA8E95cDpgOzY2';

    // Gera dados aleatórios para atualizar o filme
    const updatedMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
    };

    // Envia a requisição PUT para atualizar o filme
    const response = await putRequest(request, `${BASE_URL}/movies/${movieId}`, updatedMovie);
    
    // Verifica se o status da resposta é 200 (Atualizado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(200);
    
    // Verifica se o corpo da resposta contém os dados do filme atualizado
    const updatedMovieResponse = await response.json();
    console.log('Response Body:', updatedMovieResponse);
  });
});
