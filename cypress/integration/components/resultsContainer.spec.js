/* eslint-disable no-undef */
describe(`Results Container Component`, () => {
  beforeEach(() => {
    cy.server();
    // Input form section
    cy.route('GET', 'https://svc.metrotransit.org/NexTrip/routes').as('loadRoutes');
    cy.route('GET', 'https://svc.metrotransit.org/NexTrip/Directions/*').as('loadDirections');
    cy.route('GET', 'https://svc.metrotransit.org/NexTrip/Stops/*/*').as('loadStops');
    cy.visit('http://localhost:3000/');
    cy.wait('@loadRoutes');
    cy.get('#route-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('METRO Blue Line').click();
    cy.wait('@loadDirections');
    cy.get('#direction-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('NORTHBOUND').click();
    cy.wait('@loadStops');
    cy.get('#stop-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('Mall of America').click();
  });

  it(`Subcomponents are visible`, () => {
    // results container tests section
    cy.url().should('include', '/results');
    cy.get('.tripDisplay > div > :nth-child(1) > strong').contains('METRO Blue Line').should('be.visible');
    cy.get(':nth-child(2) > strong').contains('NORTHBOUND').should('be.visible');
    cy.get('div > :nth-child(3) > strong').contains('Mall of America').should('be.visible');
    cy.get('.topBanner').contains('NexTrip departs').should('be.visible');
    cy.get('.bottomBanner').contains('Current time').should('be.visible');
    cy.get('table').should('be.visible');
    cy.get('.MuiButtonBase-root').contains('Back to stop').should('be.visible');
  });

  it(`Has no WCAG2.0 AA accessibility violations`, () => {
    cy.injectAxe();
    cy.checkA11y({
      runOnly: {
        type:'tag',
        values: ['wcag2aa', 'wcag2a']
      }
    });
  });

  it(`Back to stop button redirects to home page`, () => {
    cy.get('.MuiButtonBase-root').contains('Back to stop').click();
    cy.url().should('eq', 'http://localhost:3000/');

  });


});