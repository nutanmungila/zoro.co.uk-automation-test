Feature: Search

 
   Scenario: Search result for search query
         When I search for "tools"
        Then The "search" page is displayed