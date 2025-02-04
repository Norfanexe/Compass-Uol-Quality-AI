// @ts-check
const { test, expect } = require('@playwright/test');
const { getRequest, deleteRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('DELETE /movies/{id} - Deleta um filme aleatório', async ({ request }) => {
    // Obtém a lista de filmes existentes
    console.log('Enviando requisição GET para /movies');
    const getMoviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('GET Movies Response Status:', getMoviesResponse.status());
    expect(getMoviesResponse.status()).toBe(200);

    const movies = await getMoviesResponse.json();
    console.log('GET Movies Response Body:', JSON.stringify(movies, null, 2));

    // Verifica se há filmes disponíveis
    if (movies.length === 0) {
      console.error('Nenhum filme encontrado.');
      throw new Error('Nenhum filme encontrado.');
    }

    // Seleciona um ID de filme aleatório da lista
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movieId = movies[randomIndex]._id;
    console.log('Selected Movie ID:', movieId);

    // Envia a requisição DELETE para deletar o filme
    console.log(`Enviando requisição DELETE para /movies/${movieId}`);
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
