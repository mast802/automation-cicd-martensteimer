/// <reference types="cypress" />


//Elements
const backToDashboardButton = ':nth-child(3) > .btn'




//Actions/methods

function backToDashboard(cy, contentToComfirm){
    cy.get(backToDashboardButton).click()
    cy.contains(contentToComfirm)
}


//Exports
module.exports = {
    backToDashboard
}
