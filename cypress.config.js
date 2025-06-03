const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/login.cy.js'],
    setupNodeEvents(on, config) {
       // Aquí agregar listeners
    },
  },
});
