/// <reference types="cypress" />


//Elements
const priceInput = ':nth-child(7) > input'
const SaveButton = '.blue'





//Actions/methods

function editPrice(cy, newPrice){
    cy.get(priceInput).clear()
    cy.get(priceInput).type(newPrice)
    cy.get(SaveButton).click()
}


//Exports
module.exports = {
    editPrice
}
