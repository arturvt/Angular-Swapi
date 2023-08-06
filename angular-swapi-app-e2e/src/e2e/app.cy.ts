import { getTab, getPeopleCard } from '../support/app.po';

describe('angular-swapi-app', () => {
  beforeEach(() => cy.visit('/'));

  it('Should start on People page', () => {
    // Custom command example, see `../support/commands.ts` file
    getTab().should('be.visible');
    getPeopleCard().should('be.visible').should('have.length', 10);
  });

  it('click on People goes to details', () => {
    {
      getPeopleCard()
        .first()
        .within((element) => {
          cy.wrap(element).get("[data-test-selector='people-details']").click();
        });
      cy.get('h1').contains('Luke Skywalker');
    }
  });
});
