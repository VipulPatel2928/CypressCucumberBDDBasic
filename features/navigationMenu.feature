Feature: Navigation Menu
        Verifying the navigation to different page
        Home
        About
        Courses
        Testimonials
        Contact

        BackGround:

        Given Open url
        When Click Navigation Menu
    @smoke
    Scenario: Verify Home page Navigation
        When Click Home link
        Then Users navigate to the Home page
    @sanity
    Scenario: Verify About page Navigation
        When Click About link
        Then Users navigate to the About page
    @sanity
    Scenario: Verify Courses page Navigation
        When Click Courses link
        Then Users navigate to the Courses page
    @sanity
    Scenario: Verify Testimonials page Navigation
        When Click Testimonials link
        Then Users navigate to the Testimonials page
    @sanity
    Scenario: Verify Contact page Navigation
        When Click Contact link
        Then Users navigate to the Contact page

