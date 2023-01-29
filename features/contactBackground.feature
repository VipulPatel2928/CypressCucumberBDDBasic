Feature: Contact Feature
    Going to check different scenarios on contact feature.

    Background:

        Given Open url
        When Click Navigation Menu
        When Click Contact link
        Then Users navigate to the Contact page

    Scenario: Verify the blank field validation for the mandatory fields

        When Click Submit button without entering any value in mandatory fields
        Then Users get the validation message for all the mandatory fields

    Scenario: Verify the label of all the fields

        And Verify all the labels

    Scenario: Verify TechiVP Location, email and phone no

        And Verify TechiVP Location, email and phone no

    Scenario Outline: Select Inquery For, Name, Mobile No, Email, Message

        And Select "<InqueryFor>" Inquery For
        And Enter "<FirstNameLastName>" First Name and Last Name
        And Enter "<MobileNO>" Mobile No
        And Enter "<Email>" Email
        And Enter "<Message>" Message

        Examples:
            | InqueryFor | FirstNameLastName | MobileNO   | Email               | Message                                          |
            | BackGroundCypress    | BackGroundVipul Patel       | 8888888888 | BackGroundinquiry@techivp.com | BackGround Would like to know about Cypress course content  |
            | BackGroundSelenium   | BackGroundV Patel           | 7777777777 | BackGroundinquiry@techivp.com | BackGround Would like to know about Selenium course content |