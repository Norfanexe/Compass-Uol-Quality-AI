const { test, expect } = require('@playwright/test');

// RBAPIT-3 [R1B] - PingBooking
test.describe('[R1B] - PingBooking', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com'; 

// Teste 1 - Validar se a API está ativa, garantindo o retorno do código 201
  test('Teste 1 - retornar 201 confirmando que a API está funcionando', async ({ request }) => {
    const response = await request.get(`${baseUrl}/ping`);

     expect(response.status()).toBe(201);

     const responseBody = await response.text();
    console.log('Created', responseBody);

    expect(responseBody).toBe('Created'); 
  });
});
