/* eslint-disable no-undef */
describe(`Header Component`, () => {
  beforeEach(() => {
    cy.server();
    cy.visit('http://localhost:3000/');
  });

  it(`Header logo is visible`, () => {
    cy.get('.headerLogo').should('be.visible');
  })

  it(`Header banner is visible`, () => {
    cy.get('.bannerImage').should('be.visible');
  })
});