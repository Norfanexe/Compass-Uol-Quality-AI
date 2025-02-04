// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { postRequest, deleteRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API - Testes de Performance', () => {
  
  test('POST /movies - Deve processar pelo menos 100 solicitações de criação de filmes por segundo', async ({ request }) => {
    const movieIds = [];
    const startTime = Date.now();

    console.log('[TESTE] Enviando 100 requisições POST para criar novos filmes...');
    const promises = [];

    for (let i = 0; i < 100; i++) {
      const newMovie = {
        title: faker.lorem.words(3),
        description: faker.lorem.sentences(2),
        launchdate: faker.date.future().toISOString(),
        showtimes: [faker.date.future().toISOString().slice(11, 16)], // Gera horário no formato HH:mm
      };

      const promise = postRequest(request, `${BASE_URL}/movies`, newMovie)
        .then(response => {
          console.log('[RESULTADO] Status Code:', response.status());
          expect(response.status()).toBe(201);
          return response.text();
        })
        .then(responseBody => {
          try {
            const createdMovie = JSON.parse(responseBody);
            movieIds.push(createdMovie._id);
            console.log('[INFO] Filme criado com ID:', createdMovie._id);
          } catch (error) {
            console.error('[RESULTADO] Filme criado', responseBody);
          }
        });

      promises.push(promise);
    }

    await Promise.all(promises);

    const endTime = Date.now();
    const totalTime = endTime - startTime;
    const averageTime = totalTime / 100;

    console.log('[RESULTADO] Tempo total para 100 requisições:', totalTime, 'ms');
    console.log('[RESULTADO] Tempo médio por requisição:', averageTime.toFixed(2), 'ms');

    // Verifica se o tempo médio de resposta é menor que 200 milissegundos
    expect(averageTime).toBeLessThan(200);

    // Deleta todos os filmes criados durante o teste
    console.log('[TESTE] Deletando todos os filmes criados durante o teste...');
    const deletePromises = movieIds.map(movieId => {
      return deleteRequest(request, `${BASE_URL}/movies/${movieId}`)
        .then(deleteResponse => {
          console.log('[RESULTADO] Status Code (DELETE):', deleteResponse.status());
          expect(deleteResponse.status()).toBe(200);
        });
    });

    await Promise.all(deletePromises);
  });
});
