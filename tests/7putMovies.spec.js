// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { putRequest, getRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('PUT /movies/{id} - Atualiza um filme', async ({ request }) => {
    // Primeiro, obtenha a lista de filmes para garantir que estamos usando um ID de filme existente
    console.log('Enviando requisição GET para /movies');
    const moviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('GET Movies Response Status:', moviesResponse.status());
    expect(moviesResponse.status()).toBe(200);
    const movies = await moviesResponse.json();
    console.log('GET Movies Response Body:', movies);
    
    // Seleciona um filme aleatório da lista
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movieId = movies[randomIndex]._id;
    console.log('Selected Movie ID:', movieId);

    // Gera dados aleatórios para atualizar o filme
    console.log('Gerando dados aleatórios para atualizar o filme');
    const updatedMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
    };
    console.log('Dados do filme atualizado:', updatedMovie);

    // Envia a requisição PUT para atualizar o filme
    console.log(`Enviando requisição PUT para /movies/${movieId}`);
    const response = await putRequest(request, `${BASE_URL}/movies/${movieId}`, updatedMovie);
    
    // Verifica se o status da resposta é 200 (Atualizado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(200);
    
    // Verifica se o corpo da resposta contém os dados do filme atualizado
    const updatedMovieResponse = await response.json();
    console.log('Response Body:', updatedMovieResponse);
  });
});

