// @ts-check
const { test, expect } = require('@playwright/test');
const { getRequest, deleteRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API - Performance Tests', () => {
  test('DELETE /movies - Processar pelo menos 30 solicitações de exclusão de filmes por segundo', async ({ request }) => {
    const movieIds = [];
    
    // Obtém filmes existentes
    console.log('Enviando requisição GET para /movies');
    const getMoviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('GET Movies Response Status:', getMoviesResponse.status());
    expect(getMoviesResponse.status()).toBe(200);

    const movies = await getMoviesResponse.json();
    console.log('GET Movies Response Body:', movies);

    // Seleciona 30 filmes para serem deletados
    console.log('Selecionando 30 filmes para exclusão');
    for (let i = 0; i < 30; i++) {
      if (movies[i]) {
        movieIds.push(movies[i]._id);
      }
    }

    const startTime = Date.now();

    // Envia 30 requisições DELETE para deletar os filmes em paralelo
    console.log('Enviando 30 requisições DELETE para excluir os filmes');
    const promises = [];
    for (const movieId of movieIds) {
      const promise = request.delete(`${BASE_URL}/movies/${movieId}`)
        .then(response => {
          console.log('DELETE Response Status:', response.status());
          expect(response.status()).toBe(200);
          return response.text(); // Lê a resposta como texto
        })
        .then(responseBody => {
          console.log('Filme Deletado', responseBody);
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
      promises.push(promise);
    }

    await Promise.all(promises);

    const endTime = Date.now();
    const totalTime = endTime - startTime;
    const averageTime = totalTime / 30;

    console.log('Total Time:', totalTime, 'ms');
    console.log('Average Time per Request:', averageTime, 'ms');

    // Verifica se o tempo médio de resposta é menor que 400 milissegundos
    expect(averageTime).toBeLessThan(400);
  });
});
