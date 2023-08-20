import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

//Scenario: I should be able to login in paraBank website
Given("I navigate to paraBank website", () =>{
    cy.visit("https://parabank.parasoft.com/")
})

When("I input invalid username and password", () =>{
    cy.get('[name="username"]').type('john')
    cy.get('[name="password"]').type('demo')
    cy.get('[value="Log In"]').click()
})

Then("I should be able to access paraBank homepage", () =>{
    cy.contains('Accounts Overview').should('be.visible')
})