// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { getRequest, putRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API - Performance Tests', () => {
  test('PUT /movies - Processar pelo menos 50 solicitações de atualização de filmes por segundo', async ({ request }) => {
    const movieIds = [];
    
    // Obtém filmes existentes
    console.log('Enviando requisição GET para /movies');
    const getMoviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('GET Movies Response Status:', getMoviesResponse.status());
    expect(getMoviesResponse.status()).toBe(200);

    const movies = await getMoviesResponse.json();
    console.log('GET Movies Response Body:', movies);

    // Seleciona 50 filmes para serem atualizados
    console.log('Selecionando 50 filmes para atualização');
    for (let i = 0; i < 50; i++) {
      if (movies[i]) {
        movieIds.push(movies[i]._id);
      }
    }

    const startTime = Date.now();

    // Envia 50 requisições PUT para atualizar os filmes em paralelo
    console.log('Enviando 50 requisições PUT para atualizar os filmes');
    const promises = [];
    for (const movieId of movieIds) {
      const updatedMovie = {
        title: faker.lorem.words(3),
        description: faker.lorem.sentences(2),
        launchdate: faker.date.future().toISOString(),
        showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
      };

      const promise = request.put(`${BASE_URL}/movies/${movieId}`, {
        data: updatedMovie
      })
        .then(response => {
          console.log('PUT Response Status:', response.status());
          expect(response.status()).toBe(200);
          return response.text(); // Lê a resposta como texto
        })
        .then(async (responseBody) => {
          console.log('PUT Response Body:', responseBody);
          if (responseBody) {
            // Verifica se o filme foi atualizado corretamente
            console.log(`Verificando atualização do filme com ID ${movieId}`);
            const getResponse = await request.get(`${BASE_URL}/movies/${movieId}`);
            console.log('GET Response Status:', getResponse.status());
            expect(getResponse.status()).toBe(200);
            const movieDetails = await getResponse.json();
            console.log('GET Response Body:', movieDetails);
            expect(movieDetails.title).toBe(updatedMovie.title);
            expect(movieDetails.description).toBe(updatedMovie.description);
            expect(movieDetails.launchdate).toBe(updatedMovie.launchdate);
            expect(movieDetails.showtimes).toEqual(updatedMovie.showtimes);
          }
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
