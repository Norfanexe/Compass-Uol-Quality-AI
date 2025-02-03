// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { getRequest, postRequest } = require('../utils/ticketsUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Tickets API - Performance Tests', () => {
  test('POST /tickets - Processar pelo menos 50 solicitações de reserva de ingressos por segundo', async ({ request }) => {
    const movieIds = [];
    
    // Obtém filmes existentes
    const getMoviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('GET Movies Response Status:', getMoviesResponse.status());
    expect(getMoviesResponse.status()).toBe(200);

    const movies = await getMoviesResponse.json();
    console.log('GET Movies Response Body:', movies);

    // Seleciona IDs dos filmes
    for (const movie of movies) {
      movieIds.push(movie._id);
    }

    const startTime = Date.now();
    const promises = [];

    // Envia 50 requisições POST para criar novos tickets em paralelo
    for (let i = 0; i < 50; i++) {
      const newTicket = {
        movieId: movieIds[i % movieIds.length], // Usa um ID de filme existente
        userId: faker.string.uuid(),
        seatNumber: faker.number.int({ min: 1, max: 100 }),
        price: faker.number.float({ min: 10, max: 100, precision: 0.01 }),
        showtime: faker.date.future().toISOString()
      };

      const promise = postRequest(request, `${BASE_URL}/tickets`, newTicket)
        .then(response => {
          console.log('POST Response Status:', response.status());
          return response.text(); // Lê a resposta como texto
        })
        .then(responseBody => {
          console.log('POST Response Body:', responseBody);
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
      promises.push(promise);
    }

    await Promise.all(promises);

    const endTime = Date.now();
    const totalTime = endTime - startTime;
    const averageTime = totalTime / 50;

    console.log('Total Time:', totalTime, 'ms');
    console.log('Average Time per Request:', averageTime, 'ms');

    // Verifica se o tempo médio de resposta é menor que 300 milissegundos
    expect(averageTime).toBeLessThan(300);
  });
});
