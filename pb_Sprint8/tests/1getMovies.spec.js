const { test, expect } = require('@playwright/test');

test.describe('Movies API', () => {
  test('GET /movies - Lista todos os filmes', async ({ request }) => {
    // Envia a requisição GET para o endpoint /movies
    console.log('Enviando requisição GET para /movies');
    const response = await request.get('http://localhost:3000/movies');
    
    // Verifica se o status da resposta é 200 (OK)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(200);
    
    // Verifica se o corpo da resposta contém a lista de filmes
    const movies = await response.json();
    console.log('Response Body:', movies);
    expect(Array.isArray(movies)).toBeTruthy();
    
    // Verifica se cada filme na lista possui as propriedades esperadas
    movies.forEach(movie => {
      console.log('Verificando propriedades do filme:', movie);
      expect(movie).toHaveProperty('_id');
      expect(movie).toHaveProperty('title');
      expect(movie).toHaveProperty('description');
      expect(movie).toHaveProperty('launchdate');
      expect(movie).toHaveProperty('showtimes');
    });
  });
});
