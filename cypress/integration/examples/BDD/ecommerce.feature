Feature: End to end Ecommerce validation

Scenario: Ecommerce product delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify Thankyou