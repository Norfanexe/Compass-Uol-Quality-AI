// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { getRequest, postRequest } = require('../utils/ticketsUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Tickets API', () => {
  test('POST /tickets - Criar um novo ticket', async ({ request }) => {
    const movieIds = [];
    
    // Obtém filmes existentes
    console.log('Enviando requisição GET para /movies');
    const getMoviesResponse = await request.get(`${BASE_URL}/movies`);
    console.log('GET Movies Response Status:', getMoviesResponse.status());
    expect(getMoviesResponse.status()).toBe(200);

    const movies = await getMoviesResponse.json();
    console.log('GET Movies Response Body:', JSON.stringify(movies, null, 2));

    // Seleciona IDs dos filmes
    console.log('Selecionando IDs dos filmes');
    for (const movie of movies) {
      movieIds.push(movie._id);
    }

    // Gera dados aleatórios para o novo ticket
    console.log('Gerando dados aleatórios para o novo ticket');
    const newTicket = {
      movieId: faker.helpers.arrayElement(movieIds), // Seleciona um ID de filme aleatório da lista
      userId: faker.string.uuid(),
      seatNumber: faker.number.int({ min: 0, max: 100 }),
      price: faker.number.float({ min: 0, max: 60, precision: 0.01 }),
      showtime: faker.date.future().toISOString()
    };
    console.log('Dados do novo ticket:', newTicket);

    // Envia a requisição POST para criar um novo ticket
    console.log('Enviando requisição POST para /tickets');
    const response = await postRequest(request, `${BASE_URL}/tickets`, newTicket);
    
    // Verifica se o status da resposta é 201 (Criado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(201);
    
    // Verifica se o corpo da resposta contém os dados do novo ticket
    const createdTicket = await response.json();
    console.log('Response Body:', JSON.stringify(createdTicket, null, 2));
  });
});

