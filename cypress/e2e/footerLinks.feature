Feature: Footer Links
    Scenario: Footer links navigate to the correct page
        When I visit the main page
        Then The following links navigate correctly
            | links             | url                |
            | Contact Us        | /contact-us        |
            | Become a Supplier | /become-a-supplier |
       