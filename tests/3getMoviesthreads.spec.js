// @ts-check
const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API - User Stories', () => {
  
  test('GET /movies - Deve listar todos os filmes em menos de 100 milissegundos', async ({ request }) => {
    const startTime = Date.now();
    console.log('[TESTE] Enviando requisição GET para /movies...');
    
    const response = await request.get(`${BASE_URL}/movies`);
    const endTime = Date.now();
    
    const responseTime = endTime - startTime;
    
    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(200);
    
    console.log('[RESULTADO] Tempo de resposta:', responseTime, 'ms');
    expect(responseTime).toBeLessThan(100);
    
    const movies = await response.json();
    console.log('[RESULTADO] Lista de Filmes:', JSON.stringify(movies, null, 2));
    expect(Array.isArray(movies)).toBeTruthy();
  });

  test('GET /movies - Deve retornar uma lista paginada com no máximo 20 filmes por página', async ({ request }) => {
    console.log('[TESTE] Enviando requisição GET para /movies?page=1&limit=20...');
    
    const response = await request.get(`${BASE_URL}/movies?page=1&limit=20`);
    
    console.log('[RESULTADO] Status Code:', response.status());
    if (response.status() !== 200) {
      console.error('[ERRO] Falha ao listar filmes paginados.');
    }
    expect(response.status()).toBe(200);
    
    const movies = await response.json();
    console.log('[RESULTADO] Filmes Paginados:', JSON.stringify(movies, null, 2));
    
    console.log('[RESULTADO] Quantidade de Filmes Retornados:', movies.length);
    if (movies.length > 20) {
      console.error('[ERRO] Número de filmes na página excede 20.');
    }
    expect(movies.length).toBeLessThanOrEqual(20);
  });

  test('GET /movies/{id} - Deve retornar os detalhes de um filme em menos de 50 milissegundos', async ({ request }) => {
    console.log('[TESTE] Obtendo lista de filmes...');
    
    const moviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('[RESULTADO] Status Code:', moviesResponse.status());
    expect(moviesResponse.status()).toBe(200);
    
    const movies = await moviesResponse.json();
    console.log('[RESULTADO] Filmes disponíveis:', JSON.stringify(movies, null, 2));

    if (movies.length === 0) {
      throw new Error('[ERRO] Nenhum filme encontrado.');
    }

    const movieId = movies[0]._id;
    console.log(`[INFO] Selecionado filme com ID: ${movieId}`);

    const startTime = Date.now();
    console.log(`[TESTE] Enviando requisição GET para /movies/${movieId}...`);
    
    const response = await request.get(`${BASE_URL}/movies/${movieId}`);
    const endTime = Date.now();
    
    const responseTime = endTime - startTime;
    
    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(200);
    
    console.log('[RESULTADO] Tempo de resposta:', responseTime, 'ms');
    expect(responseTime).toBeLessThan(50);
    
    const movie = await response.json();
    console.log('[RESULTADO] Detalhes do Filme:', JSON.stringify(movie, null, 2));

    expect(movie).toHaveProperty('_id', movieId);
    expect(movie).toHaveProperty('title');
    expect(movie).toHaveProperty('description');
    expect(movie).toHaveProperty('launchdate');
    expect(movie).toHaveProperty('showtimes');
  });
});
