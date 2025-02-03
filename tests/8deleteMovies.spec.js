// @ts-check
const { test, expect } = require('@playwright/test');
const { getRequest, deleteRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('DELETE /movies/{id} - Deleta um filme', async ({ request }) => {
    const movieIds = [];
    
    // Obtém filmes existentes
    const getMoviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('GET Movies Response Status:', getMoviesResponse.status());
    expect(getMoviesResponse.status()).toBe(200);

    const movies = await getMoviesResponse.json();
    console.log('GET Movies Response Body:', JSON.stringify(movies, null, 2));

    // Seleciona IDs dos filmes
    for (const movie of movies) {
      movieIds.push(movie._id);
    }

    // Verifica se há IDs de filmes disponíveis
    if (movieIds.length === 0) {
      throw new Error('Nenhum filme encontrado.');
    }

    // Seleciona um ID de filme aleatório da lista
    const movieId = movieIds[Math.floor(Math.random() * movieIds.length)];
    console.log('Selected Movie ID:', movieId);

    // Envia a requisição DELETE para deletar o filme
    const deleteResponse = await deleteRequest(request, `${BASE_URL}/movies/${movieId}`);
    console.log('DELETE Response Status:', deleteResponse.status());
    expect(deleteResponse.status()).toBe(200);
    
    // Verifica se o corpo da resposta contém os dados do filme deletado, se houver
    const responseBody = await deleteResponse.text();
    if (responseBody) {
      const deletedMovieResponse = JSON.parse(responseBody);
      console.log('Response Body:', JSON.stringify(deletedMovieResponse, null, 2));
    } else {
      console.log('Response Body is empty');
    }
  });
});
