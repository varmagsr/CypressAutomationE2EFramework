Feature: End to End Ecommerce Validation

    App Smoke Test

    Scenario: Ecommerce Product delivery
    Given I Open Ecommerce Page
    When I add items to cart
    Then select the country submit and verify Thankyou msg


    Scenario: Filling the form to shop
    Given I Open Ecommerce Page
    When I fill the form details 
    Then Validate the form behaviour
    And select the shop page
