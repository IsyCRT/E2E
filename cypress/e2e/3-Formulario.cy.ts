describe('template spec', () => {
 const formRegister = Cypress.config().baseUrl + '/user/register';
 beforeEach(() => {
     cy.visit(formRegister);
 });

  it('Entrar a formulario', () => {
    cy.get('#name').type('Test');
    cy.contains('button', 'Register').should('be.disabled');
    cy.get('#email').type('test@prueba.com');
    cy.get('#password').type('test123');
    cy.get('#password2').type('test123');
    cy.get('#terms').check();
    cy.contains('button', 'Register').should('be.enabled');
  });

  });