// @ts-check
const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API - User Stories', () => {
  test('GET /movies - Lista todos os filmes em menos de 100 milissegundos', async ({ request }) => {
    const startTime = Date.now();
    const response = await request.get(`${BASE_URL}/movies`);
    const endTime = Date.now();
    
    // Verifica se o status da resposta é 200 (OK)
    expect(response.status()).toBe(200);
    
    // Verifica se o tempo de resposta é menor que 100 milissegundos
    const responseTime = endTime - startTime;
    console.log('Response Time:', responseTime, 'ms');
    expect(responseTime).toBeLessThan(100);
    
    // Verifica se o corpo da resposta contém a lista de filmes
    const movies = await response.json();
    expect(Array.isArray(movies)).toBeTruthy();
  });

  test('GET /movies - Lista de filmes deve ser paginada com no máximo 20 filmes por página', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/movies?page=1&limit=20`);
    
    // Verifica se o status da resposta é 200 (OK)
    expect(response.status()).toBe(200);
    
    // Verifica se o corpo da resposta contém a lista de filmes
    const movies = await response.json();
    expect(Array.isArray(movies)).toBeTruthy();
    
    // Verifica se o número de filmes na página é no máximo 20
    console.log('Number of Movies:', movies.length);
    expect(movies.length).toBeLessThanOrEqual(20);
  });

  test('GET /movies/{id} - Detalhes de um filme em menos de 50 milissegundos', async ({ request }) => {
    const movieId = 'BbBHTQM8MGtFjPpf'; // ID de um filme existente
    const startTime = Date.now();
    const response = await request.get(`${BASE_URL}/movies/${movieId}`);
    const endTime = Date.now();
    
    // Verifica se o status da resposta é 200 (OK)
    expect(response.status()).toBe(200);
    
    // Verifica se o tempo de resposta é menor que 50 milissegundos
    const responseTime = endTime - startTime;
    console.log('Response Time:', responseTime, 'ms');
    expect(responseTime).toBeLessThan(50);
    
    // Verifica se o corpo da resposta contém os detalhes do filme
    const movie = await response.json();
    expect(movie).toHaveProperty('_id', movieId);
    expect(movie).toHaveProperty('title');
    expect(movie).toHaveProperty('description');
    expect(movie).toHaveProperty('launchdate');
    expect(movie).toHaveProperty('showtimes');
  });
});