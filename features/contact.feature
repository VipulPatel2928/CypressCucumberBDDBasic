Feature: Contact Feature
    Going to check different scenarios on contact feature.

    Scenario: Verify the blank field validation for the mandatory fields
        Given Open url
        When Click Navigation Menu
        When Click Contact link
        Then Users navigate to the Contact page
        When Click Submit button without entering any value in mandatory fields
        Then Users get the validation message for all the mandatory fields

    Scenario: Verify the label of all the fields
        Given Open url
        When Click Navigation Menu
        When Click Contact link
        Then Users navigate to the Contact page
        And Verify all the labels

    Scenario: Verify TechiVP Location, email and phone no
        Given Open url
        When Click Navigation Menu
        When Click Contact link
        Then Users navigate to the Contact page
        And Verify TechiVP Location, email and phone no

        Scenario Outline: Select Inquery For, Name, Mobile No, Email, Message
        Given Open url
        When Click Navigation Menu
        When Click Contact link
        Then Users navigate to the Contact page
        And Select "<InqueryFor>" Inquery For
        And Enter "<FirstNameLastName>" First Name and Last Name
        And Enter "<MobileNO>" Mobile No
        And Enter "<Email>" Email
        And Enter "<Message>" Message

        Examples:
            |InqueryFor | FirstNameLastName | MobileNO | Email | Message |
            | Cypress | Vipul Patel  | 1234567899  | inquiry@techivp.com | Would like to know about Cypress course content|
            | Selenium | V Patel  | 9876543211  | inquiry@techivp.com | Would like to know about Selenium course content|