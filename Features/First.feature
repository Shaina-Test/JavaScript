Feature: IHG Logging

Scenario: Valid IHG logging
Given the user on the IHG home page
When the user clicks on the sign in button
Then the user should be redirected to the IHG login page
When the user enters valid credentials with "valid_username" and "valid_password"
Then the user should be logged in successfully

