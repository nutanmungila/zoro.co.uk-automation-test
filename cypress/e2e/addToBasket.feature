Feature: Add to Basket

    Scenario: Add to basket from product page
        Given I navigate to the page
        When I click on Add to basket button
        Then The following text is displayed "Successfully added to your Basket"
    
    