// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { putRequest, getRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('PUT /movies/{id} - Enviar uma solicitação PUT para o endpoint /movies/{id}', async ({ request }) => {
    console.log('Obtendo lista de filmes...');
    const moviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('Status da resposta ao obter filmes:', moviesResponse.status());
    expect(moviesResponse.status()).toBe(200);

    const movies = await moviesResponse.json();
    console.log('Filmes disponíveis:', movies);

    const randomIndex = Math.floor(Math.random() * movies.length);
    const movieId = movies[randomIndex]._id;
    console.log('Filme selecionado para atualização:', movieId);

    const updatedMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)],
    };

    console.log('Enviando atualização para o filme:', updatedMovie);
    const response = await putRequest(request, `${BASE_URL}/movies/${movieId}`, updatedMovie);
    
    console.log('Status da resposta após atualização:', response.status());
    expect(response.status()).toBe(200);
  });

  test('PUT /movies/{id} - Verificar a existência do filme e validar os dados', async ({ request }) => {
    console.log('Obtendo lista de filmes...');
    const moviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('Status da resposta ao obter filmes:', moviesResponse.status());
    expect(moviesResponse.status()).toBe(200);

    const movies = await moviesResponse.json();
    console.log('Filmes disponíveis:', movies);

    const randomIndex = Math.floor(Math.random() * movies.length);
    const movieId = movies[randomIndex]._id;
    console.log('Filme selecionado para atualização:', movieId);

    const updatedMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)],
    };

    console.log('Enviando atualização para o filme:', updatedMovie);
    const response = await putRequest(request, `${BASE_URL}/movies/${movieId}`, updatedMovie);
    
    console.log('Status da resposta após atualização:', response.status());
    expect(response.status()).toBe(200);

    const updatedMovieResponse = await response.json();
    console.log('Corpo da resposta após atualização:', updatedMovieResponse);

    expect(updatedMovieResponse).toHaveProperty('_id', movieId);
    expect(updatedMovieResponse).toHaveProperty('title', updatedMovie.title);
    expect(updatedMovieResponse).toHaveProperty('description', updatedMovie.description);
    expect(updatedMovieResponse).toHaveProperty('launchdate', updatedMovie.launchdate);
    expect(updatedMovieResponse).toHaveProperty('showtimes', updatedMovie.showtimes);
  });

  test('PUT /movies/{id} - Atualizar os detalhes do filme', async ({ request }) => {
    console.log('Obtendo lista de filmes...');
    const moviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('Status da resposta ao obter filmes:', moviesResponse.status());
    expect(moviesResponse.status()).toBe(200);

    const movies = await moviesResponse.json();
    console.log('Filmes disponíveis:', movies);

    const randomIndex = Math.floor(Math.random() * movies.length);
    const movieId = movies[randomIndex]._id;
    console.log('Filme selecionado para atualização:', movieId);

    const updatedMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)],
    };

    console.log('Enviando atualização para o filme:', updatedMovie);
    const response = await putRequest(request, `${BASE_URL}/movies/${movieId}`, updatedMovie);
    
    console.log('Status da resposta após atualização:', response.status());
    expect(response.status()).toBe(200);

    const updatedMovieResponse = await response.json();
    console.log('Corpo da resposta após atualização:', updatedMovieResponse);

    expect(updatedMovieResponse).toHaveProperty('_id', movieId);
    expect(updatedMovieResponse).toHaveProperty('title', updatedMovie.title);
    expect(updatedMovieResponse).toHaveProperty('description', updatedMovie.description);
    expect(updatedMovieResponse).toHaveProperty('launchdate', updatedMovie.launchdate);
    expect(updatedMovieResponse).toHaveProperty('showtimes', updatedMovie.showtimes);
  });

  test('PUT /movies/{id} - Retornar resposta de sucesso com status 200 OK e detalhes atualizados do filme', async ({ request }) => {
    console.log('Obtendo lista de filmes...');
    const moviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('Status da resposta ao obter filmes:', moviesResponse.status());
    expect(moviesResponse.status()).toBe(200);

    const movies = await moviesResponse.json();
    console.log('Filmes disponíveis:', movies);

    const randomIndex = Math.floor(Math.random() * movies.length);
    const movieId = movies[randomIndex]._id;
    console.log('Filme selecionado para atualização:', movieId);

    const updatedMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)],
    };

    console.log('Enviando atualização para o filme:', updatedMovie);
    const response = await putRequest(request, `${BASE_URL}/movies/${movieId}`, updatedMovie);
    
    console.log('Status da resposta após atualização:', response.status());
    expect(response.status()).toBe(200);

    const updatedMovieResponse = await response.json();
    console.log('Corpo da resposta após atualização:', updatedMovieResponse);

    expect(updatedMovieResponse).toHaveProperty('_id', movieId);
    expect(updatedMovieResponse).toHaveProperty('title', updatedMovie.title);
    expect(updatedMovieResponse).toHaveProperty('description', updatedMovie.description);
    expect(updatedMovieResponse).toHaveProperty('launchdate', updatedMovie.launchdate);
    expect(updatedMovieResponse).toHaveProperty('showtimes', updatedMovie.showtimes);
  });
});
