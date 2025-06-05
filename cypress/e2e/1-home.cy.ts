describe('template spec', () => {
it('Verifica la URL después de navegar', () => {
  cy.visit('https://example.cypress.io');
    cy.url().should('include', 'example.cypress.io');
    cy.get('h1', { timeout: 1000 }).should('be.visible');
});

it('Navegar', () => {
  cy.visit('/');
    cy.get('a').each(($el) => {
      cy.request($el.prop('href')).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
});

it('Navegar - variante', () => {
  cy.visit('/');
  cy.get('a').each(($el) => { 
  const href = $el.prop('href');
  if (href.startsWith('http://localhost')) { //obliga que se inicie con http://localhost
    cy.request(href).then((resp) => {
      expect(resp.status).to.eq(200);
    });
   }
 });
});

it('Navegar - variante2', () => {
  cy.visit('/');
  cy.get('a').each(($el) =>
    cy.request($el.prop('href')).its('status').should('eq', 200) //solo toma los enlaces cargados en ese momento - NO hace crawler
  );
});


});
