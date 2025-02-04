// @ts-check
const { test, expect } = require('@playwright/test');
const { 
  getRequest, 
  validateMoviesProperties, 
  getMovieById, 
  validateMovieProperties 
} = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API - Testes Funcionais', () => {
  
  test('GET /movies - Deve retornar status 200', async ({ request }) => {
    console.log('[TESTE] Enviando requisição GET para /movies');
    const response = await request.get(`${BASE_URL}/movies`);
    
    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(200);
  });

  test('GET /movies - Deve retornar uma lista de filmes cadastrados', async ({ request }) => {
    console.log('[TESTE] Enviando requisição GET para /movies');
    const response = await request.get(`${BASE_URL}/movies`);
    
    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(200);
    
    const movies = await response.json();
    console.log('[RESULTADO] Lista de Filmes:', JSON.stringify(movies, null, 2));
    expect(Array.isArray(movies)).toBeTruthy();
    
    console.log('[TESTE] Validando propriedades dos filmes');
    validateMoviesProperties(movies);
  });

  test('GET /movies/{id} - Deve retornar um filme específico', async ({ request }) => {
    console.log('[TESTE] Obtendo lista de filmes...');
    const moviesResponse = await request.get(`${BASE_URL}/movies`);
    
    console.log('[RESULTADO] Status Code:', moviesResponse.status());
    expect(moviesResponse.status()).toBe(200);

    const movies = await moviesResponse.json();
    console.log('[RESULTADO] Filmes obtidos:', JSON.stringify(movies, null, 2));

    if (movies.length === 0) {
      throw new Error('[ERRO] Nenhum filme encontrado no banco de dados.');
    }

    const movieId = movies[0]._id;
    console.log(`[INFO] Selecionado filme com ID: ${movieId}`);

    console.log(`[TESTE] Enviando requisição GET para /movies/${movieId}`);
    const response = await request.get(`${BASE_URL}/movies/${movieId}`);
    
    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(200);
    
    const movie = await response.json();
    console.log('[RESULTADO] Detalhes do Filme:', JSON.stringify(movie, null, 2));

    validateMovieProperties(movie, movieId);
  });

  test('GET /movies/{id} - Deve retornar erro 404 para um ID inexistente', async ({ request }) => {
    const invalidMovieId = 'invalid1234567890';
    console.log(`[TESTE] Enviando requisição GET para /movies/${invalidMovieId}`);

    const response = await request.get(`${BASE_URL}/movies/${invalidMovieId}`);
    
    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(404);
  });
});
