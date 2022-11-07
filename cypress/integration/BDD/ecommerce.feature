Feature: End to End Ecommerce Validation

    App Smoke Test
    @Regression
    Scenario: Ecommerce Product delivery
    Given I Open Ecommerce Page
    When I add items to cart
    Then select the country submit and verify Thankyou msg

    @Smoke
    Scenario: Filling the form to shop
    Given I Open Ecommerce Page
    When I fill the form details
        |name  | gender |
        |Shyam |  Male  |
    Then Validate the form behaviour
        |name  | gender |
        |Shyam |  Male  |
    And select the shop page
