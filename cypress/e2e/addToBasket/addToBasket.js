const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I navigate to the page',()=>{
    cy.visit('https://www.zoro.co.uk/');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get(':nth-child(2) > #categoryItemMenu').click();
})

When('I click on Add to basket button',()=>{

})



Then(/^The following text is displayed "(.*)"$/,(msg)=>{
    
    //cy.get(POP_UP).contains(msg);
})