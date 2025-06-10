describe('display error', () => {
    context('Probar conexion', () => {
       beforeEach(() => {
            cy.visit('/');
        }); 

        before(() => {
            const apiUrl = Cypress.env('apiUrl');
            cy.request('DELETE', apiUrl + 'portfolios').then((response) => {
                expect(response.status).to.eq(200);
            });
        }); 

        it('Crear porfolio', () => {
            cy.get('[type="number"]').clear().type('1234567890');
            cy.get('[type="text"]').clear().type('Test');
            cy.get('button').contains("Create").click();
            cy.get('h1').contains('Your Portfolio');
        });
    });
});