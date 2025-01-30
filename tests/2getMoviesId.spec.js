// @ts-check
const { test } = require('@playwright/test');
const { getMovieById, validateMovieProperties } = require('../utils/moviesUtils');
const BASE_URL = 'http://localhost:3000';

test.describe('Movies API', () => {
  test('GET /movies/{id} - Lista um filme com sucesso', async ({ request }) => {
    const movieId = '4zLfWmI63mFSgCgV'; // ID de um filme existente
    const movie = await getMovieById(request, movieId);
    validateMovieProperties(movie, movieId);
  });
});
