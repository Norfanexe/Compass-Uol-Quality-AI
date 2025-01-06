const { test, expect } = require('@playwright/test');

test.describe('[R1B] - POSTBooking', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';
  let token;

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
    token = authData.token; // Armazena o token para uso nos testes
  });

  test('Deve criar uma nova reserva com sucesso', async ({ request }) => {
    const bookingData = {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01"
      },
      additionalneeds: "Breakfast"
    };

    const response = await request.post(`${baseUrl}/booking`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`, // Incluímos o token se a API exigir
      },
      data: bookingData,
    });

    // Verifica o status da resposta
    expect(response.status()).toBe(200);

    // Valida o corpo da resposta
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody).toHaveProperty('booking');

    // Valida os detalhes da reserva criada
    const createdBooking = responseBody.booking;
    expect(createdBooking.firstname).toBe(bookingData.firstname);
    expect(createdBooking.lastname).toBe(bookingData.lastname);
    expect(createdBooking.totalprice).toBe(bookingData.totalprice);
    expect(createdBooking.depositpaid).toBe(bookingData.depositpaid);
    expect(createdBooking.additionalneeds).toBe(bookingData.additionalneeds);
    expect(createdBooking.bookingdates.checkin).toBe(bookingData.bookingdates.checkin);
    expect(createdBooking.bookingdates.checkout).toBe(bookingData.bookingdates.checkout);
  });
});
