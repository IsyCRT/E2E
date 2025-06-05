
describe('Prueba de que esta levantada la app de Angular', () => {
 beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('Carga la UI correctamente y verifica contenido', () => {
    cy.get('pre') 
      .should('exist')
      .invoke('text') //es jquery que devuelve el texto del elemento
      .then((text) => {
      expect(text, 'El contenido no debe estar vacío').to.not.be.empty;
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        throw new Error(`JSON inválido: "${text}"`);
      }
      expect(data.country).to.eq('Spain');
    });
  });

  it('Ver log', () => {
    cy.get('pre') 
      .should('exist') 
      .invoke('text') 
      .then((text) => {
        console.log('Texto que devuelve el <pre>:', text); // inspeccionar navegador-cypress y console
        cy.log('información que quiera para entender donde estoy situado'); // inspeccionar consola de cypress
      })
  });

  it('Usando wrap', () => {
    cy.get('pre')
        .invoke('text')
        .then((text) => {
         const data = JSON.parse(text);
        cy.wrap(data).should('have.property', 'country', 'Spain');
    });
  });

});
