// @ts-check
const { test, expect } = require('@playwright/test');
const { getRequest, getMovieById, validateMovieProperties } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('GET /movies/{id} - Lista um filme com sucesso', async ({ request }) => {
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

    // Obtém os detalhes do filme pelo ID
    const getMovieResponse = await request.get(`${BASE_URL}/movies/${movieId}`);
    console.log('GET Movie Response Status:', getMovieResponse.status());
    expect(getMovieResponse.status()).toBe(200);

    const movie = await getMovieResponse.json();
    console.log('GET Movie Response Body:', JSON.stringify(movie, null, 2));

    validateMovieProperties(movie, movieId);
  });
});
