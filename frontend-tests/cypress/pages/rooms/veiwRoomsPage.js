/// <reference types="cypress" />


//Elements
const backToDashboardButton = ':nth-child(3) > .btn'
const createRoomButton = 'h2 > .btn'
const lastRoomTitle = ':nth-last-child(1) > :nth-child(2) > h3'
const lastRoomPrice = ':nth-last-child(1) > :nth-child(2) > .price'
const menuLastRoom = ':nth-last-child(1) > .action > img'
const menuEditLastRoom = ':nth-last-child(1) > .menu > :nth-child(1)'



//Actions/methods

function backToDashboard(cy, contentToComfirm){
    cy.get(backToDashboardButton).click()
    cy.contains(contentToComfirm)
}

function createRoom(cy, contentToComfirm){
    cy.get(createRoomButton).click()
    cy.contains(contentToComfirm)

}

function assertLastElementRoomTitle(cy, contentToComfirm){
    cy.get(lastRoomTitle).contains(contentToComfirm)

}

function assertLastElementRoomPrice(cy, contentToComfirm){
    cy.get(lastRoomPrice).contains(contentToComfirm)
}

function editLastRoom(cy){
    cy.get(menuLastRoom).click()
    cy.get(menuEditLastRoom).click()
    cy.contains('Features')
}



//Exports
module.exports = {
    backToDashboard, 
    createRoom,
    assertLastElementRoomTitle,
    assertLastElementRoomPrice,
    editLastRoom
}
