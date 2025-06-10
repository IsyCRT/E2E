// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


export {};
declare global {
  namespace Cypress {
        interface Chainable {
            deletePortfolios(): Chainable<void>;
            nuevoAssets(number: string, text: string): Chainable<void>;
        }
   }
}

// cypress/support/commands.ts

Cypress.Commands.add('deletePortfolios', () => {
  const apiUrl = Cypress.env('apiUrl');
  cy.request('DELETE', `${apiUrl}portfolios`)
    .then((response) => {
      expect(response.status).to.be.oneOf([200, 204, 404]);
    });
});

Cypress.Commands.add('nuevoAssets', (number: string, text: string) => {
  cy.get('[type="number"]').clear().type(number);
  cy.get('[type="text"]').clear().type(text);
  cy.get('button').contains('Create').click();
});

