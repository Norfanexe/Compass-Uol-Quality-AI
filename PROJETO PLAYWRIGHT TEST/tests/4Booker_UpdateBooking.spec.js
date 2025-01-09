const { test, expect } = require('@playwright/test');

test.describe('UpdateBooking API Tests', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';
  let token;
  let createdBookingId;

  // Processo de gerar login na API pelo método beforeAll para todos os testes.
  test.beforeAll(async ({ request }) => {
    // Gera o token
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

    // Cria uma reserva para atualizar
    const bookingResponse = await request.post(`${baseUrl}/booking`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: `token=${token}`, // Cabeçalho de autenticação via Cookie
      },
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 200,
        depositpaid: true,
        bookingdates: {
          checkin: "2024-01-01",
          checkout: "2024-01-10",
        },
        additionalneeds: "Dinner",
      },
    });

    expect(bookingResponse.status()).toBe(200);
    const bookingData = await bookingResponse.json();
    expect(bookingData).toHaveProperty('bookingid');
    createdBookingId = bookingData.bookingid;
  });

  test('Deve atualizar uma reserva com sucesso', async ({ request }) => {
    const updatedBookingData = {
      firstname: "James",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    };

    const response = await request.put(`${baseUrl}/booking/${createdBookingId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: `token=${token}`, // Cabeçalho Cookie
      },
      data: updatedBookingData,
    });

    // Valida que a reserva foi atualizada com sucesso
    expect(response.status()).toBe(200);

    // Valida os dados atualizados
    const responseBody = await response.json();
    expect(responseBody.firstname).toBe(updatedBookingData.firstname);
    expect(responseBody.lastname).toBe(updatedBookingData.lastname);
    expect(responseBody.totalprice).toBe(updatedBookingData.totalprice);
    expect(responseBody.depositpaid).toBe(updatedBookingData.depositpaid);
    expect(responseBody.additionalneeds).toBe(updatedBookingData.additionalneeds);
    expect(responseBody.bookingdates.checkin).toBe(updatedBookingData.bookingdates.checkin);
    expect(responseBody.bookingdates.checkout).toBe(updatedBookingData.bookingdates.checkout);
  });

  test('Deve retornar erro ao tentar atualizar com token inválido', async ({ request }) => {
    const updatedBookingData = {
      firstname: "Invalid",
      lastname: "User",
      totalprice: 0,
      depositpaid: false,
      bookingdates: {
        checkin: "2024-01-01",
        checkout: "2024-01-10",
      },
      additionalneeds: "None",
    };

    const response = await request.put(`${baseUrl}/booking/${createdBookingId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: `token=invalid_token`, // Token inválido
      },
      data: updatedBookingData,
    });

    // Verifica o status de erro
    expect([403, 401]).toContain(response.status());
  });
});
