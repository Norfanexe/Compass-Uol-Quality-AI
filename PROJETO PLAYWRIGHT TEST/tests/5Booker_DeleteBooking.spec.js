const { test, expect } = require('@playwright/test');

test.describe('DeleteBooking API Tests (Using Cookie Header)', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';
  let token;
  let createdBookingId;

  // Processo de gerar login na API pelo método beforeAll para todos os testes.
  test.beforeAll(async ({ request }) => {
    const authResponse = await request.post(`${baseUrl}/auth`, {
      data: {
        username: 'admin',  
        password: 'password123',  
      },
    });

    expect(authResponse.status()).toBe(200);

    const authData = await authResponse.json();
    expect(authData).toHaveProperty('token');
    token = authData.token;

    // Cria uma reserva para deletar
    const bookingResponse = await request.post(`${baseUrl}/booking`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: `token=${token}`, // Cabeçalho de autenticação via Cookie
      },
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    });

    expect(bookingResponse.status()).toBe(200);
    const bookingData = await bookingResponse.json();
    expect(bookingData).toHaveProperty('bookingid');
    createdBookingId = bookingData.bookingid;
  });

  test('Deve deletar uma reserva com sucesso usando cabeçalho Cookie', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/booking/${createdBookingId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: `token=${token}`, // Cabeçalho Cookie
      },
    });

    // Valida que a reserva foi deletada com sucesso
    expect(response.status()).toBe(201);

    // Tenta obter a reserva deletada para confirmar que não existe mais
    const getResponse = await request.get(`${baseUrl}/booking/${createdBookingId}`, {
      headers: {
        Accept: 'application/json',
      },
    });

    expect(getResponse.status()).toBe(404); // A reserva deletada deve retornar 404
  });

  test('Deve retornar erro ao tentar deletar com token inválido no cabeçalho Cookie', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/booking/${createdBookingId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: `token=invalid_token`, // Token inválido no Cookie
      },
    });

    // Verifica o status de erro
    expect([403, 401]).toContain(response.status());
  });
});

