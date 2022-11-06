Feature: End to End Ecommerce Validation

    Feature Description

    Scenario: Ecommerce Product delivery
    Given I Open Ecommerce Page
    When I add items to cart
    Then select the country submit and verify Thankyou msg
