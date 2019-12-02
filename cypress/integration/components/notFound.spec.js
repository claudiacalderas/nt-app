/* eslint-disable no-undef */
describe(`Not Found Component`, () => {
  beforeEach(() => {
    cy.server();
    cy.visit('http://localhost:3000/notaroute');
  });

  it(`Not found page is visible when undefined route is used`, () => {
    cy.log('sfsf');
    cy.get('h1').contains('Page Not Found').should('be.visible');
  })

});