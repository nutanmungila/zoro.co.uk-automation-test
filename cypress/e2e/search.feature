Feature: Search


    Scenario: Search result for search query
        When I search for "tools"
        Then The "search" page is displayed

    Scenario: Search result for empty search query
        When I click on the search icon
        Then The "search" page is displayed