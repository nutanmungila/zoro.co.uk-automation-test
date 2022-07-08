const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { SEARCH_BAR,SEARCH_ICON } = require("./locaters");

When(/^I search for "(.*)"$/, (searchQuery) => {

    cy.visit('https://www.zoro.co.uk/')
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get(SEARCH_BAR).type(searchQuery).type('{enter}');

})




Then(/^The "(.*)" page is displayed$/, (pageName) => {
    
    cy.location('pathname').should('include', '/shop');

})

When('I click on the search icon', () => {
    cy.log('aaaaaaaaaaaaaa');
   
    cy.get(SEARCH_ICON).click({ force: true });
})

