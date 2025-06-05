describe('Prueba de que esta levantada la app de Angular', () => {
 
    it('Valida que el servidor está respondiendo (status 200)', () => {
        cy.request('http://localhost:4200/').then((response) => {
        expect(response.status).to.eq(200); // Prueba tipo "smoke"
        });
    });

  });