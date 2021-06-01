/// <reference types="cypress" />


//Elements
const roomCategory = ':nth-child(1) > select'
const roomNumber = ':nth-child(2) > input'
const roomFloor = ':nth-child(3) > input'
const roomAvailable = '.checkbox'
const roomPrice = ':nth-child(5) > input'
const roomFeatures = ':nth-child(6) > select'
const saveRoom = '.blue'








//Actions/methods

function addNewRoom(cy, category, number, floor, price, features){
    cy.get(roomCategory).select(category)
    cy.get(roomNumber).type(number)
    cy.get(roomFloor).type(floor)
    cy.get(roomAvailable).click()
    cy.get(roomPrice).type(price)
    cy.get(roomFeatures).select(features)
    cy.get(saveRoom).click()
}



//Exports
module.exports = {
    addNewRoom
}
