import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/login.cy.js'],
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // Aquí agregar listeners
    },
    baseUrl: 'http://localhost:4200',
    env: {
        apiUrl: 'http://localhost:3000/',
    },
  },
});
