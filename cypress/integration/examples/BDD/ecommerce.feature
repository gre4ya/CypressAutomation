Feature: End to end Ecommerce validation
@Regression
Scenario: Ecommerce product delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify Thankyou
@Smoke
Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
    |name   |gender|email          |
    |Alex   |Male  |Alex@test.com  |
    Then validate the forms behaviour
    And select the Shop Page
