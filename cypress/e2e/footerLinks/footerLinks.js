const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When('I visit the main page', () => {
    cy.visit('https://www.zoro.co.uk/');
    cy.get('#onetrust-accept-btn-handler').click();
})

Then(/^The following links navigate correctly$/, dataTable => {

    const data = dataTable.raw();
    

    for (let i = 1; i < data.length; i++) {
        const locator = `a:contains("${data[i][0]}")`;
        cy.log('locator',locator);
        cy.get(locator).click();
        cy.location('pathname').should('include', data[i][1]);
        cy.go('back');
    }

    
   

})