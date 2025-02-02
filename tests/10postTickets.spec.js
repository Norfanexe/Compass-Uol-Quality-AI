// @ts-check
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { postRequest } = require('../utils/ticketsUtils');

const BASE_URL = 'http://localhost:3000';

// Lista de IDs de filmes existentes
const movieIds = [
  '4r6L6d9RXA32T9MM',
  '4zLfWmI63mFSgCgV',
  'BbBHTQM8MGtFjPpf',
  'DGz2rzOVSIKozxxr',
  'IKE0KYCmMsG6gNKW',
  'LMV7NlGJlFkSR9jx',
  'N5Ryl46bNZ1qn2Tr',
  'OOjumIsKScUA8qFP',
  'PNPxCuBNaknX8M7B',
  'VUpsLuOmSEN4vK7u',
  'ZW0d1sXUIapE37us',
  'bIZvDdU8ncqpCgIT',
  'dVlAf0C5UlMNUwa2',
  'drYDvfL2g21pWsv0',
  'fraFUC0vf1d4wBcK',
  'jreHRQJKrcicrQss',
  'm4nC1vENI36l9H5U',
  'm7VA8E95cDpgOzY2',
  'nyozeO6Oy5MLlymr',
  'oDjllrBPlIAJfIu0',
  'rYC0RAs9yIofwdgh',
  'ricEgoD3X8j98diN',
  'vUnHfAkjVeHcUbDU'
];

test.describe('Tickets API', () => {
  test('POST /tickets - Criar um novo ticket', async ({ request }) => {
    // Gera dados aleatórios para o novo ticket
    const newTicket = {
      movieId: faker.helpers.arrayElement(movieIds), // Seleciona um ID de filme aleatório da lista
      userId: faker.string.uuid(),
      seatNumber: faker.number.int({ min: 0, max: 100 }),
      price: faker.number.float({ min: 0, max: 60, precision: 0.01 }),
      showtime: faker.date.future().toISOString()
    };

    // Envia a requisição POST para criar um novo ticket
    const response = await postRequest(request, `${BASE_URL}/tickets`, newTicket);
    
    // Verifica se o status da resposta é 201 (Criado)
    console.log('Status Code:', response.status());
    expect(response.status()).toBe(201);
    
    // Verifica se o corpo da resposta contém os dados do novo ticket
    const createdTicket = await response.json();
    console.log('Response Body:', createdTicket);
  });
});
