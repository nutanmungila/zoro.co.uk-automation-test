const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { SEARCH_BAR } = require("./locaters");

When(/^I search for "(.*)"$/, (searchQuery) => {
 
    cy.visit('https://www.zoro.co.uk/')
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get(SEARCH_BAR).type(searchQuery).type('{enter}');

  })

  Then(/^The "(.*)" page is displayed$/, (pageName) =>{
    cy.log('aaa',pageName);
    cy.location('pathname').should('include', '/shop');

  })