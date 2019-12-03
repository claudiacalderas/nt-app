/* eslint-disable no-undef */
describe(`Input Container Component`, () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', 'https://svc.metrotransit.org/NexTrip/routes').as('loadRoutes');
    cy.route('GET', 'https://svc.metrotransit.org/NexTrip/Directions/*').as('loadDirections');
    cy.route('GET', 'https://svc.metrotransit.org/NexTrip/Stops/*/*').as('loadStops');
    cy.visit('http://localhost:3000/');
  });

  it(`Subcomponents are visible`, () => {
    cy.get('#route-select').should('be.visible');
    cy.get('#direction-select').should('be.visible');
    cy.get('#stop-select').should('be.visible');
    cy.get('#outlined-required-label').contains('Stop Number').should('be.visible');
    cy.get('.MuiButtonBase-root').contains('Stop Number').should('be.visible');
  })

  it(`Loads routes when component mounts`, () => {
    cy.wait('@loadRoutes').then((xhr) => {
      expect(xhr.status).to.equal(200);
    });
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

  it(`Displays routes in select route component`, () => {
    cy.wait('@loadRoutes');
    cy.get('#route-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('METRO Blue Line')
  })

  it(`Loads directions when selecting one route`, () => {
    cy.wait('@loadRoutes');
    cy.get('#route-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('METRO Blue Line').click();
    cy.wait('@loadDirections').then((xhr) => {
      expect(xhr.status).to.equal(200);
    });
  });

  it(`Displays directions in select direction component`, () => {
    cy.wait('@loadRoutes');
    cy.get('#route-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('METRO Blue Line').click();
    cy.wait('@loadDirections');
    cy.get('#direction-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('NORTHBOUND');
  });

  it(`Loads stops when selecting one direction`, () => {
    cy.wait('@loadRoutes');
    cy.get('#route-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('METRO Blue Line').click();
    cy.wait('@loadDirections');
    cy.get('#direction-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('NORTHBOUND').click();
    cy.wait('@loadStops').then((xhr) => {
      expect(xhr.status).to.equal(200);
    });
  });

  it(`Displays stops in select stop component`, () => {
    cy.wait('@loadRoutes');
    cy.get('#route-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('METRO Blue Line').click();
    cy.wait('@loadDirections');
    cy.get('#direction-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('NORTHBOUND').click();
    cy.wait('@loadStops');
    cy.get('#stop-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('Mall of America');
  });

  it(`Routes to results when selecting a stop`, () => {
    cy.wait('@loadRoutes');
    cy.get('#route-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('METRO Blue Line').click();
    cy.wait('@loadDirections');
    cy.get('#direction-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('NORTHBOUND').click();
    cy.wait('@loadStops');
    cy.get('#stop-select').click();
    cy.get('.MuiList-root > [tabindex="0"]').contains('Mall of America').click();
    cy.url().should('include', '/results');
  });

  it(`Stop Number input is required`, () => {
    cy.get('#outlined-required').should('have.attr', 'required');
  });

  it(`Routes to results when entering a stop number`, () => {
    cy.get('#outlined-required').type('51405');
    cy.get('.MuiButtonBase-root').contains('Stop Number').click();
    cy.url().should('include', '/results');
  });



});