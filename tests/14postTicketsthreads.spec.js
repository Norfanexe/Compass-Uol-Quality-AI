// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { getRequest, postRequest } = require('../utils/ticketsUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Tickets API - Testes de Performance', () => {
  
  test('POST /tickets - Deve processar 50 requisições por segundo', async ({ request }) => {
    const movieIds = [];
    
    // Obtém filmes existentes
    console.log('[TESTE] Buscando lista de filmes disponíveis...');
    const getMoviesResponse = await request.get(`${BASE_URL}/movies`);
    expect(getMoviesResponse.status()).toBe(200);

    const movies = await getMoviesResponse.json();
    console.log('[INFO] Filmes disponíveis:', JSON.stringify(movies, null, 2));

    // Coletando IDs dos filmes
    for (const movie of movies) {
      movieIds.push(movie._id);
    }

    if (movieIds.length === 0) {
      throw new Error('Nenhum filme disponível para reserva.');
    }

    const requests = [];
    const responseTimes = [];

    console.log('[TESTE] Enviando 50 requisições simultâneas...');
    for (let i = 0; i < 50; i++) {
      const newTicket = {
        movieId: faker.helpers.arrayElement(movieIds),
        userId: faker.string.uuid(),
        seatNumber: faker.number.int({ min: 0, max: 100 }),
        price: faker.number.float({ min: 0, max: 60, precision: 0.01 }),
        showtime: faker.date.future().toISOString(),
      };

      const start = Date.now();
      const responsePromise = postRequest(request, `${BASE_URL}/tickets`, newTicket)
        .then((response) => {
          const duration = Date.now() - start;
          responseTimes.push(duration);
          return response;
        });

      requests.push(responsePromise);
    }

    // Espera todas as requisições serem concluídas
    await Promise.all(requests);

    // Calcula tempo médio de resposta
    const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    
    console.log(`[RESULTADO] Tempo médio de resposta: ${avgResponseTime.toFixed(2)} ms`);
    console.log(`[RESULTADO] Requisições bem-sucedidas: ${requests.length}/50`);

    // Valida se o tempo médio de resposta está dentro do limite de 300ms
    expect(avgResponseTime).toBeLessThanOrEqual(300);
  });
});
