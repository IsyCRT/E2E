describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Encontrar footer y ver titulo', () => {
    cy.get('footer').should('be.visible').contains('Angular Softtek');
  });

  it('Encontrar Enlace', () => {
    cy.get('a.secondary').should('contain.text', 'AlbertoBasalo');
    cy.get('a.secondary').should('have.attr', 'href', 'https://albertobasalo.dev');
    cy.get('a[href="https://albertobasalo.dev"]').should('be.visible');
  });
  
  it('En el body', () => {
    cy.get('pre').contains('Spain');
  });

});
