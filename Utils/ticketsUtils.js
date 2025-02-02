// @ts-check
const { expect } = require('@playwright/test');

/**
 * Envia uma requisição POST para criar um novo ticket.
 * @param {object} request - Objeto de requisição do Playwright.
 * @param {string} endpoint - Endpoint para enviar a requisição.
 * @param {object} data - Dados do novo ticket.
 * @returns {Promise<object>} - Resposta da API.
 */
async function postRequest(request, endpoint, data) {
  const response = await request.post(endpoint, {
    data: data,
  });
  expect(response.status()).toBe(201);
  return response;
}

module.exports = { postRequest };
