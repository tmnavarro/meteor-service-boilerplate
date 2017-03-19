Feature: Request access email

  As a customer without permission to a section
  I want to send an email requesting access
  So that they can request access without calling in.

  Scenario: User requests
    Given A request for "Support, Finance & Admin"
    Then I should recieve request sent
