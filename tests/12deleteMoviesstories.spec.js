// @ts-check
const { test, expect } = require('@playwright/test');
const { getRequest, deleteRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('DELETE /movies/{id} - Enviar uma solicitação DELETE para o endpoint /movies/{id}', async ({ request }) => {
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
  });

  test('DELETE /movies/{id} - Verificar a existência do filme antes de deletar', async ({ request }) => {
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

    // Verifica se o filme foi realmente deletado
    console.log(`Verificando se o filme com ID ${movieId} foi deletado`);
    const getDeletedMovieResponse = await request.get(`${BASE_URL}/movies/${movieId}`);
    console.log('GET Deleted Movie Response Status:', getDeletedMovieResponse.status());
    expect(getDeletedMovieResponse.status()).toBe(404);
  });

  test('DELETE /movies/{id} - Remover permanentemente o filme do banco de dados', async ({ request }) => {
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

    // Verifica se o filme foi realmente deletado
    console.log(`Verificando se o filme com ID ${movieId} foi deletado`);
    const getDeletedMovieResponse = await request.get(`${BASE_URL}/movies/${movieId}`);
    console.log('GET Deleted Movie Response Status:', getDeletedMovieResponse.status());
    expect(getDeletedMovieResponse.status()).toBe(404);
  });

  test('DELETE /movies/{id} - Retornar resposta de sucesso com status 200 OK', async ({ request }) => {
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
  });
});
