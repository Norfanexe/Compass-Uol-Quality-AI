// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { postRequest, deleteRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API - Performance Tests', () => {
  test('POST /movies - Processar pelo menos 100 solicitações de criação de filmes por segundo', async ({ request }) => {
    const movieIds = [];
    const startTime = Date.now();

    // Envia 100 requisições POST para criar novos filmes em paralelo
    const promises = [];
    for (let i = 0; i < 100; i++) {
      const newMovie = {
        title: faker.lorem.words(3),
        description: faker.lorem.sentences(2),
        launchdate: faker.date.future().toISOString(),
        showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
      };

      const promise = postRequest(request, `${BASE_URL}/movies`, newMovie)
        .then(response => {
          expect(response.status()).toBe(201);
          return response.text(); // Lê a resposta como texto
        })
        .then(responseBody => {
          try {
            const createdMovie = JSON.parse(responseBody);
            movieIds.push(createdMovie._id);
          } catch (error) {
            console.error('Erro ao analisar a resposta da API:', responseBody);
          }
        });
      promises.push(promise);
    }

    await Promise.all(promises);

    const endTime = Date.now();
    const totalTime = endTime - startTime;
    const averageTime = totalTime / 100;

    console.log('Total Time:', totalTime, 'ms');
    console.log('Average Time per Request:', averageTime, 'ms');

    // Verifica se o tempo médio de resposta é menor que 200 milissegundos
    expect(averageTime).toBeLessThan(200);

    // Deleta todos os filmes criados durante o teste
    const deletePromises = movieIds.map(movieId => {
      return deleteRequest(request, `${BASE_URL}/movies/${movieId}`)
        .then(deleteResponse => {
          expect(deleteResponse.status()).toBe(200);
        });
    });

    await Promise.all(deletePromises);
  });
});
