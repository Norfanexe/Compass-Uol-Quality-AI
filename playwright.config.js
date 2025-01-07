// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'C:\\Users\\Norfa\\Desktop\\COMPASS NORFAN\\trilha-1\\tests', // Define o diretório raiz como local dos testes
  testMatch: '*.spec.js', // Padrão de nome para os arquivos de teste
})

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests', // Define o diretório onde os arquivos de teste estão localizados
  /* Run tests in files in parallel */
  fullyParallel: true, // Permite que os testes sejam executados em paralelo
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI, // Garante que o build falhe se test.only for deixado acidentalmente no código-fonte durante a execução no CI
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, // Define o número de tentativas de repetição dos testes no CI em caso de falha
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, // Define o número de workers (processos paralelos) a serem usados no CI
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html', // Define o formato do relatório dos testes (HTML)
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry', // Coleta rastreamentos (traces) quando um teste falha na primeira tentativa
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Configura projetos para os principais navegadores, como o Chromium
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});



