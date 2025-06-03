describe('Login test con fixture', () => {
  it('Usa datos desde un archivo fixture', () => {
    cy.fixture('usuario').then((user) => {
      cy.visit('/login')
      cy.get('#email').type(user.email)
      cy.get('#password').type(user.password)
      cy.get('#login-button').click()
    })
  })
})
