const { When, Then, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
const { SEARCH_BAR, SEARCH_ICON, CATEGORY_BUTTON } = require("./locaters");

When('I visit the main page', () => {

    cy.visit('https://www.zoro.co.uk/');
    cy.get('#onetrust-accept-btn-handler').click();

})

When(/^I search for "(.*)"$/, (searchQuery) => {

    cy.get(SEARCH_BAR).type(searchQuery).type('{enter}');

})



Then(/^The "(.*)" page is displayed$/, (pageName) => {


    cy.location('pathname').should('include', '/shop');

})

When('I click on the search icon', () => {

    cy.get(SEARCH_ICON).click();
})



Then('The following categories navigate correctly', dataTable => {

    const data = dataTable.raw();
    for (let i = 1; i < data.length; i++) {
        cy.get(CATEGORY_BUTTON).click();
        const locator = `a.grouped-menu-item:contains("${data[i][0]}")`;
        cy.get(locator).click();
        cy.location('pathname').should('include', data[i][1]);
        cy.go('back');

    }


})


