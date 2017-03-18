Feature: call the ping service

  In order to check a service
  As a Developer
  I call the ping service.

  Scenario: ping endpoint should return
    Given the ping service
    When I call the endpoint
    Then return an object
