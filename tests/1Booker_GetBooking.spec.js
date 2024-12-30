const { test, expect } = require('@playwright/test');

test.describe('[R1B] - GET Booking', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';
  let token;

  // 1 - Acessando a API pelo POST/Booking com usuário e senha
  test.beforeAll(async ({ request }) => {
    const authResponse = await request.post(`${baseUrl}/auth`, {
      data: {
        username: 'admin', 
        password: 'password123',
      },
    });

    expect(authResponse.status()).toBe(200);
  // 2 - Token gerado 
    const authData = await authResponse.json();
    expect(authData).toHaveProperty('token');
    token = authData.token; // Armazena o token para uso nos testes
  });

  test('Deve retornar status 200 e lista de reservas', async ({ request }) => {
    const response = await request.get(`${baseUrl}/booking`, {
      headers: {
        Authorization: `Bearer ${token}`, // Token gerado no item: 2 - Token gerado
      },
    });

    expect(response.status()).toBe(200);

    const bookings = await response.json();
    expect(Array.isArray(bookings)).toBe(true);
    expect(bookings.length).toBeGreaterThan(0);
    bookings.forEach(booking => {
      expect(booking).toHaveProperty('bookingid');
    });
  });

  test('Deve filtrar reservas por nome do cliente', async ({ request }) => {
    const response = await request.get(`${baseUrl}/booking?firstname=John&lastname=Doe`, {
      headers: {
        Authorization: `Bearer ${token}`, // Token gerado no item: 2 - Token gerado
      },
    });

    expect(response.status()).toBe(200);

    const filteredBookings = await response.json();
    filteredBookings.forEach(booking => {
      expect(booking).toHaveProperty('bookingid');
    });
  });

  test('Deve retornar erro ao usar um token inválido', async ({ request }) => {
    const response = await request.get(`${baseUrl}/booking`, {
      headers: {
        Authorization: 'Bearer invalid_token',
      },
    });

    expect(response.status()).toBe(403); // Status 403 - Unauthorized
  });

  test('Deve retornar erro para parâmetros inválidos', async ({ request }) => {
    const response = await request.get(`${baseUrl}/booking?invalidParam=invalidValue`, {
      headers: {
        Authorization: `Bearer ${token}`, // Token gerado no item: 2 - Token gerado
      },
    });

    expect(response.status()).toBe(200); // Validar se API pode ignorar parâmetros inválidos
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
  });
});



