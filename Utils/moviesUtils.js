// @ts-check
const { expect } = require('@playwright/test');

/**
 * Envia uma requisição GET para o endpoint especificado.
 * @param {object} request - Objeto de requisição do Playwright.
 * @param {string} endpoint - Endpoint para enviar a requisição.
 * @returns {Promise<object>} - Resposta da API.
 */
async function getRequest(request, endpoint) {
  const response = await request.get(endpoint);
  expect(response.status()).toBe(200);
  return response.json();
}

/**
 * Verifica se cada filme na lista possui as propriedades esperadas.
 * @param {Array<object>} movies - Lista de filmes.
 */
function validateMoviesProperties(movies) {
  expect(Array.isArray(movies)).toBeTruthy();
  movies.forEach(movie => {
    expect(movie).toHaveProperty('_id');
    expect(movie).toHaveProperty('title');
    expect(movie).toHaveProperty('description');
    expect(movie).toHaveProperty('launchdate');
    expect(movie).toHaveProperty('showtimes');
  });
}

/**
 * Envia uma requisição GET para obter um filme por ID.
 * @param {object} request - Objeto de requisição do Playwright.
 * @param {string} id - ID do filme.
 * @returns {Promise<object>} - Resposta da API.
 */
async function getMovieById(request, id) {
  const response = await request.get(`http://localhost:3000/movies/${id}`);
  expect(response.status()).toBe(200);
  return response.json();
}

/**
 * Verifica se um filme possui as propriedades esperadas.
 * @param {object} movie - Objeto do filme.
 * @param {string} id - ID do filme.
 */
function validateMovieProperties(movie, id) {
  expect(movie).toHaveProperty('_id', id);
  expect(movie).toHaveProperty('title');
  expect(movie).toHaveProperty('description');
  expect(movie).toHaveProperty('launchdate');
  expect(movie).toHaveProperty('showtimes');
}

/**
 * Envia uma requisição POST para criar um novo filme.
 * @param {object} request - Objeto de requisição do Playwright.
 * @param {string} endpoint - Endpoint para enviar a requisição.
 * @param {object} data - Dados do novo filme.
 * @returns {Promise<object>} - Resposta da API.
 */
async function postRequest(request, endpoint, data) {
  const response = await request.post(endpoint, {
    data: data,
  });
  expect(response.status()).toBe(201);
  return response;
}

/**
 * Envia uma requisição PUT para atualizar um filme.
 * @param {object} request - Objeto de requisição do Playwright.
 * @param {string} endpoint - Endpoint para enviar a requisição.
 * @param {object} data - Dados atualizados do filme.
 * @returns {Promise<object>} - Resposta da API.
 */
async function putRequest(request, endpoint, data) {
  const response = await request.put(endpoint, {
    data: data,
  });
  expect(response.status()).toBe(200);
  return response;
}

/**
 * Envia uma requisição DELETE para deletar um filme.
 * @param {object} request - Objeto de requisição do Playwright.
 * @param {string} endpoint - Endpoint para enviar a requisição.
 * @returns {Promise<object>} - Resposta da API.
 */
async function deleteRequest(request, endpoint) {
  const response = await request.delete(endpoint);
  expect(response.status()).toBe(200);
  return response;
}

module.exports = { getRequest, validateMoviesProperties, getMovieById, validateMovieProperties, postRequest, putRequest, deleteRequest };
