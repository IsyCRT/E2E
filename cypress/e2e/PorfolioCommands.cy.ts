describe('display error', () => {
    context('Probar conexion', () => {
       beforeEach(() => {
             cy.visit('/');
        }); 
        
        it('Delete porfolios', () => {
           cy.deletePortfolios();
        });
        
        it('Crear porfolio', () => {
            cy.nuevoAssets('10', 'test2');
            cy.get('h1').contains('Your Portfolio');
        });
    });
});