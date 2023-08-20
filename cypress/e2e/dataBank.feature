Feature: Login logout functionality

    Scenario: I should be able to login in paraBank website
        Given I navigate to paraBank website
        When I input invalid username and password
        Then I should be able to access paraBank homepage