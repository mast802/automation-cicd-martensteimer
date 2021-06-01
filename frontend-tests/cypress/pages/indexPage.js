/// <reference types="cypress" />


//Elements
const usernameInputField = ':nth-child(1) > input'
const passwordInputField = ':nth-child(2) > input'
const loginButton = '.btn'




//Actions/methods

function performValidLogin(cy, username, password, contentToComfirm){
    cy.get(usernameInputField).type(username)
    cy.get(passwordInputField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToComfirm)
}
//Exports
module.exports = {
    performValidLogin
}
