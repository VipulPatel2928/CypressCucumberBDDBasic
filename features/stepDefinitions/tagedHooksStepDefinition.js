var { Given, When, Then, Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

/* Before(function () {
    console.log("Run before every scenario")
})

After("@TagedHook",function () {
    console.log("Run after every scenario")
})

BeforeAll(function () {
    console.log("Run before All scenarios")
})
AfterAll(function () {
    console.log("Run after All Scenarios")
}) */


Given('Open www.techivp.com1', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("Open www.techivp.com1");
});

When('scroll down to website page1', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("scroll down to website page1");
});

Then('user see the HOME ABOUT COURSES TESTIMONIALS CONTACT option in Footer1', function () {
    // Write code here that turns the phrase above into concrete actions
    return console.log("user see the HOME ABOUT COURSES TESTIMONIALS CONTACT option in Footer1");
});