var {Given, When, Then} = require("@cucumber/cucumber");
Given('Open url', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Open url");
});
When('Click Navigation Menu', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Click Navigation Menu");
});
When('Click Contact link', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Click Contact link");
});
Then('Users navigate to the Contact page', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Users navigate to the Contact page");
});
When('Click Submit button without entering any value in mandatory fields', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Click Submit button without entering any value in mandatory fields");
});
Then('Users get the validation message for all the mandatory fields', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Users get the validation message for all the mandatory fields");
});
Then('Verify all the labels', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Verify all the labels");
});
Then('Verify TechiVP Location, email and phone no', function () {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Verify TechiVP Location, email and phone no");
});
Then(/^Select "([^"]*)" Inquery For$/, function (InqueryFor) {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Select "+InqueryFor +" Inquery For");
});
Then(/^Enter "([^"]*)" First Name and Last Name$/,function (FirstNameLastName) {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Enter First Name and Last Name : "+FirstNameLastName);
});
Then(/^Enter "([^"]*)" Mobile No$/, function (MobileNO) {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Enter Mobile No : "+MobileNO);
});
Then(/^Enter "([^"]*)" Email$/, function (Email) {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Enter Email : "+Email);
});
Then(/^Enter "([^"]*)" Message$/, function (Message) {
  // Write code here that turns the phrase above into concrete actions
  return console.log("Enter Message :"+Message);
});
