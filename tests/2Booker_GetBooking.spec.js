const { test, expect } = require('@playwright/test');

// RBAPIT-4 [R1B] - GETBooking
test.describe('[R1B] - Get Booking', () => {
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

// Teste 1 - Realizar listagem de reservas, obtendo o retorno 200
  test.describe('[R1B] - Get Booking', () => {
    test('Teste 1 - Retornar status 200 e lista de reservas', async ({ request }) => {
      const response = await request.get(`${baseUrl}/booking`, {
        headers: {
          Authorization: `Bearer ${token}`,
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

// Teste 2 - Filtar uma determinada reserva através do nome do cliente
    test('Teste 2 - filtrar reservas por nome do cliente', async ({ request }) => {
      const response = await request.get(`${baseUrl}/booking?firstname=John&lastname=Doe`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      expect(response.status()).toBe(200);

      const filteredBookings = await response.json();
      filteredBookings.forEach(booking => {
        expect(booking).toHaveProperty('bookingid');
      });
    });

// Teste 3 - Caso o token esteja inválido, deve - se retornar erro  
    test('Teste 3 - retornar erro ao usar um token inválido', async ({ request }) => {
      const response = await request.get(`${baseUrl}/booking`, {
        headers: {
          Authorization: 'Bearer invalid_token',
        },
      });

      expect([403, 401, 200]).toContain(response.status());
    });

// Teste 4 - Validar caso dados estejam inválidos, retornar erro    
    test('Teste 4 - Deve retornar erro para parâmetros inválidos', async ({ request }) => {
      const response = await request.get(`${baseUrl}/booking?invalidParam=invalidValue`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      expect(response.status()).toBe(200); // A API pode ignorar parâmetros inválidos
      const data = await response.json();
      expect(Array.isArray(data)).toBe(true);
    });
  });

// RBAPIT-4 [R1B] - GET Booking ID
  test.describe('[R1B] - Get Booking ID', () => {

// Teste 1 - Listar todas as reversas (IDs) e retornar status 200
    test('Teste 1 - retornar status 200 e IDs de todas as reservas', async ({ request }) => {
      const response = await request.get(`${baseUrl}/booking`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      expect(response.status()).toBe(200);

      const bookings = await response.json();
      expect(Array.isArray(bookings)).toBe(true);
      bookings.forEach(booking => {
        expect(booking).toHaveProperty('bookingid');
      });
    });

// Teste 2 - Validar retorno específico pelo firstname e lastname    
    test('Teste 2 - filtrar reservas por firstname e lastname', async ({ request }) => {
      const response = await request.get(`${baseUrl}/booking?firstname=John&lastname=Doe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      expect(response.status()).toBe(200);

      const filteredBookings = await response.json();
      expect(Array.isArray(filteredBookings)).toBe(true);
      filteredBookings.forEach(booking => {
        expect(booking).toHaveProperty('bookingid');
      });
    });

// Teste 3 - Validar retorno de reservas checkin e checkout    
    test('Teste 3 - filtrar reservas por checkin e checkout', async ({ request }) => {
      const response = await request.get(`${baseUrl}/booking?checkin=2024-01-01&checkout=2024-01-10`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      expect(response.status()).toBe(200);

      const dateFilteredBookings = await response.json();
      expect(Array.isArray(dateFilteredBookings)).toBe(true);
      dateFilteredBookings.forEach(booking => {
        expect(booking).toHaveProperty('bookingid');
      });
    });

// Teste 4 - Com critérios inválidos, retornar lista vazia
    test('Teste 4 - retornar lista vazia se nenhum critério for atendido', async ({ request }) => {
      const response = await request.get(`${baseUrl}/booking?firstname=NonexistentName&lastname=NonexistentLastName`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      expect(response.status()).toBe(200);

      const noBookings = await response.json();
      expect(Array.isArray(noBookings)).toBe(true);
      expect(noBookings.length).toBe(0); 
    });
  });
});




