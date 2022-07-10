Feature: Search

    Background:
    When I visit the main page

    Scenario: Search result for search query
        When I search for "tools"
        Then The "search" page is displayed

   
    Scenario: Search result for empty search query
        When I click on the search icon
        Then The "search" page is displayed

    
    Scenario: Navigating to each categories
        
        Then The following categories navigate correctly
            | links             | url                |
            | Hand Tools        | /hand-tools        |
            | Automotive        | /automotive        |
            | Personal Protection | /personal-protection |
            | Power Tools       | /power-tools        |
            | Cutting Tools        | /cutting-tools        |
            | Cleaning & Hygiene       | /cleaning-and-hygiene        |
            | Storage & Handling        | /storage-and-handling        |
            | Lubricants & Chemicals        | /lubricants-and-chemicals        |
            | Abrasives        | /abrasives        |
            | Site Safety        | /site-safety        |
            | Office Supplies & Stationery        | /office-supplies-and-stationery        |
            | Display Material        | /display-and-point-of-sale-material        |
            | Measuring & Test Equipment        | /measuring-and-test-equipment        |
            | Adhesives & Sealants        | /adhesives-and-sealants        |
            | Fasteners        | /fasteners        |
            | All Categories        | /all-categories        |
