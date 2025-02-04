// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { postRequest, getRequest, getMovieById } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('POST /movies - Enviar uma solicitação POST com os detalhes do filme', async ({ request }) => {
    // Gera dados aleatórios para o novo filme
    console.log('Gerando dados aleatórios para o novo filme');
    const newMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
    };
    console.log('Dados do novo filme:', newMovie);

    // Envia a requisição POST para criar um novo filme
    console.log('Enviando requisição POST para /movies');
    const response = await postRequest(request, `${BASE_URL}/movies`, newMovie);
    
    // Verifica se o status da resposta é 201 (Criado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(201);
  });

  test('POST /movies - Validar campos obrigatórios e unicidade do título', async ({ request }) => {
    // Gera dados aleatórios para o novo filme
    console.log('Gerando dados aleatórios para o novo filme');
    const newMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
    };
    console.log('Dados do novo filme:', newMovie);

    // Envia a requisição POST para criar um novo filme
    console.log('Enviando requisição POST para /movies');
    const response = await postRequest(request, `${BASE_URL}/movies`, newMovie);
    
    // Verifica se o status da resposta é 201 (Criado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(201);

    // Tenta criar o mesmo filme novamente para verificar a unicidade do título
    console.log('Enviando requisição POST duplicada para /movies');
    const duplicateResponse = await request.post(`${BASE_URL}/movies`, {
      data: newMovie,
    });
    console.log('Duplicate Status Code:', duplicateResponse.status());
    expect(duplicateResponse.status()).toBe(400); // Espera-se que a resposta seja 400 (Requisição inválida)
  });

  test('POST /movies - Criar filme e atribuir um ID único', async ({ request }) => {
    // Gera dados aleatórios para o novo filme
    console.log('Gerando dados aleatórios para o novo filme');
    const newMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
    };
    console.log('Dados do novo filme:', newMovie);

    // Envia a requisição POST para criar um novo filme
    console.log('Enviando requisição POST para /movies');
    const response = await postRequest(request, `${BASE_URL}/movies`, newMovie);
    
    // Verifica se o status da resposta é 201 (Criado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(201);

    // Obtém o filme criado para verificar o ID único
    console.log('Obtendo lista de filmes para verificar o ID único');
    const movies = await getRequest(request, `${BASE_URL}/movies`);
    const createdMovie = movies.find(movie => movie.title === newMovie.title);
    console.log('Created Movie ID:', createdMovie._id);
    expect(createdMovie).toHaveProperty('_id');
  });

  test('POST /movies - Retornar resposta de sucesso com status 201 Created', async ({ request }) => {
    // Gera dados aleatórios para o novo filme
    console.log('Gerando dados aleatórios para o novo filme');
    const newMovie = {
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      launchdate: faker.date.future().toISOString(),
      showtimes: [faker.date.future().toISOString().slice(11, 16)] // Gera horário no formato HH:mm
    };
    console.log('Dados do novo filme:', newMovie);

    // Envia a requisição POST para criar um novo filme
    console.log('Enviando requisição POST para /movies');
    const response = await postRequest(request, `${BASE_URL}/movies`, newMovie);
    
    // Verifica se o status da resposta é 201 (Criado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(201);

    // Obtém o filme criado para verificar o ID único
    console.log('Obtendo lista de filmes para verificar o ID único');
    const movies = await getRequest(request, `${BASE_URL}/movies`);
    const createdMovie = movies.find(movie => movie.title === newMovie.title);
    console.log('Created Movie ID:', createdMovie._id);
    expect(createdMovie).toHaveProperty('_id');
  });
});
