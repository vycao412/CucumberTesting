Feature: Search and Delete Function
  Scenario: Search a hotel and delete this from list of hotel a specific name
    Given Open a certain browser and navigate to Login page of administrator back-end
    When User enters valid account at front site
    And User enters valid password at front site
    And User clicks on Login button at front site
    And navigate to edit hotel https://www.phptravels.net/admin/hotels/
    And Click Search on the bottom
    And Type name of hotel in search textbox
    And Click button Go on the bottom
    And Check into first checkbox in the result list
    And Click on Delete selected button above result table
    And Click Search on the bottom
    And Type name of hotel in search textbox
    And Click button Go on the bottom
    Then Page reloads and return text Entries not found.

  Scenario Outline: Search a hotel and delete this from list of hotel with dynamic name
    Given Open a certain browser and navigate to Login page of administrator back-end
    When User enters valid account at front site
    And User enters valid password at front site
    And User clicks on Login button at front site
    And navigate to edit hotel https://www.phptravels.net/admin/hotels/
    And Click Search on the bottom
    And Type name of hotel in search textbox with "<name>"
    And Click button Go on the bottom
    And Check into first checkbox in the result list
    And Click on Delete selected button above result table
    And Click Search on the bottom
    And Type name of hotel in search textbox with "<name>"
    And Click button Go on the bottom
    Then Page reloads and return text Entries not found.
    Examples:
      | name |
      | Tria Hotel Istanbul Special |
      | Rose Rayhaan Rotana         |
      | Oasis Beach Tower          |