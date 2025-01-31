// @ts-check
const { test, expect } = require('@playwright/test');
const { deleteRequest } = require('../utils/moviesUtils');

const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('DELETE /movies/{id} - Deleta um filme', async ({ request }) => {
    // ID de um filme existente
    const movieId = 'ricEgoD3X8j98diN';

    // Envia a requisição DELETE para deletar o filme
    const deleteResponse = await deleteRequest(request, `${BASE_URL}/movies/${movieId}`);
    
    // Verifica se o status da resposta é 200 (Deletado)
    expect(deleteResponse.status()).toBe(200);
  });
});
