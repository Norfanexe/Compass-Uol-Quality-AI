// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { getRequest, postRequest } = require('../utils/ticketsUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Tickets API - Testes Funcionais', () => {
  
  test('POST /tickets - Validar detalhes do ticket', async ({ request }) => {
    console.log('[TESTE] Obtendo filmes disponíveis...');
    const movies = await getRequest(request, `${BASE_URL}/movies`);
    
    if (movies.length === 0) {
      throw new Error('[ERRO] Nenhum filme encontrado.');
    }

    const newTicket = {
      movieId: faker.helpers.arrayElement(movies.map(m => m._id)),
      userId: faker.string.uuid(),
      seatNumber: faker.number.int({ min: 0, max: 99 }),
      price: faker.number.float({ min: 0, max: 60, precision: 0.01 }),
      showtime: faker.date.future().toISOString(),
    };

    console.log('[TESTE] Enviando requisição POST para criar um novo ticket...');
    const response = await postRequest(request, `${BASE_URL}/tickets`, newTicket);

    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(201);

    const createdTicket = await response.json();
    console.log('[RESULTADO] Ticket Criado:', createdTicket);

    expect(createdTicket).toMatchObject(newTicket);
    expect(createdTicket).toHaveProperty('_id');
  });

  test('POST /tickets - Validar campos obrigatórios', async ({ request }) => {
    console.log('[TESTE] Obtendo filmes disponíveis...');
    const movies = await getRequest(request, `${BASE_URL}/movies`);

    if (movies.length === 0) {
      throw new Error('[ERRO] Nenhum filme encontrado.');
    }

    const newTicket = {
      movieId: faker.helpers.arrayElement(movies.map(m => m._id)),
      seatNumber: faker.number.int({ min: 0, max: 99 }),
      price: faker.number.float({ min: 0, max: 60, precision: 0.01 }),
      showtime: faker.date.future().toISOString(),
    };

    console.log('[TESTE] Enviando requisição POST sem userId...');
    const response = await request.post(`${BASE_URL}/tickets`, { data: newTicket });

    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(400);

    const errorResponse = await response.json();
    console.log('[RESULTADO] Erro retornado:', errorResponse);
    expect(errorResponse).toHaveProperty('error');
  });

  test('POST /tickets - Verificar número do assento', async ({ request }) => {
    console.log('[TESTE] Obtendo filmes disponíveis...');
    const movies = await getRequest(request, `${BASE_URL}/movies`);

    if (movies.length === 0) {
      throw new Error('[ERRO] Nenhum filme encontrado.');
    }

    const newTicket = {
      movieId: faker.helpers.arrayElement(movies.map(m => m._id)),
      userId: faker.string.uuid(),
      seatNumber: 100, // Assento inválido
      price: faker.number.float({ min: 0, max: 60, precision: 0.01 }),
      showtime: faker.date.future().toISOString(),
    };

    console.log('[TESTE] Enviando requisição POST com assento inválido...');
    const response = await request.post(`${BASE_URL}/tickets`, { data: newTicket });

    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(400);

    const errorResponse = await response.json();
    console.log('[RESULTADO] Erro retornado:', errorResponse);
    expect(errorResponse).toHaveProperty('error');
  });

  test('POST /tickets - Verificar preço do ingresso', async ({ request }) => {
    console.log('[TESTE] Obtendo filmes disponíveis...');
    const movies = await getRequest(request, `${BASE_URL}/movies`);

    if (movies.length === 0) {
      throw new Error('[ERRO] Nenhum filme encontrado.');
    }

    const newTicket = {
      movieId: faker.helpers.arrayElement(movies.map(m => m._id)),
      userId: faker.string.uuid(),
      seatNumber: faker.number.int({ min: 0, max: 99 }),
      price: 61, // Preço inválido
      showtime: faker.date.future().toISOString(),
    };

    console.log('[TESTE] Enviando requisição POST com preço inválido...');
    const response = await request.post(`${BASE_URL}/tickets`, { data: newTicket });

    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(400);

    const errorResponse = await response.json();
    console.log('[RESULTADO] Erro retornado:', errorResponse);
    expect(errorResponse).toHaveProperty('error');
  });

  test('POST /tickets - Atribuir ID único à reserva de ingresso', async ({ request }) => {
    console.log('[TESTE] Obtendo filmes disponíveis...');
    const movies = await getRequest(request, `${BASE_URL}/movies`);

    if (movies.length === 0) {
      throw new Error('[ERRO] Nenhum filme encontrado.');
    }

    const newTicket = {
      movieId: faker.helpers.arrayElement(movies.map(m => m._id)),
      userId: faker.string.uuid(),
      seatNumber: faker.number.int({ min: 0, max: 99 }),
      price: faker.number.float({ min: 0, max: 60, precision: 0.01 }),
      showtime: faker.date.future().toISOString(),
    };

    console.log('[TESTE] Criando ticket...');
    const response = await postRequest(request, `${BASE_URL}/tickets`, newTicket);

    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(201);

    const createdTicket = await response.json();
    console.log('[RESULTADO] Ticket Criado:', createdTicket);

    expect(createdTicket).toHaveProperty('_id');
    expect(createdTicket._id).toBeTruthy();
  });

  test('POST /tickets - Retornar resposta de sucesso com status 201 Created e ID da reserva', async ({ request }) => {
    console.log('[TESTE] Obtendo filmes disponíveis...');
    const movies = await getRequest(request, `${BASE_URL}/movies`);

    if (movies.length === 0) {
      throw new Error('[ERRO] Nenhum filme encontrado.');
    }

    const newTicket = {
      movieId: faker.helpers.arrayElement(movies.map(m => m._id)),
      userId: faker.string.uuid(),
      seatNumber: faker.number.int({ min: 0, max: 99 }),
      price: faker.number.float({ min: 0, max: 60, precision: 0.01 }),
      showtime: faker.date.future().toISOString(),
    };

    console.log('[TESTE] Criando ticket válido...');
    const response = await postRequest(request, `${BASE_URL}/tickets`, newTicket);

    console.log('[RESULTADO] Status Code:', response.status());
    expect(response.status()).toBe(201);

    const createdTicket = await response.json();
    console.log('[RESULTADO] Ticket Criado:', createdTicket);

    expect(createdTicket).toMatchObject(newTicket);
    expect(createdTicket).toHaveProperty('_id');
  });
});
