import * as commonHelpers from './commonHelpers'

const ENDPOINT_GET_ROOMS = 'http://localhost:3000/api/rooms'
const ENDPOINT_POST_ROOM = 'http://localhost:3000/api/room/new'
const ENDPOINT_GET_ROOM = 'http://localhost:3000/api/room/'

// Function to view all Rooms (testcase 03)
function getAllRoomsRequest(cy){
    cy.authenticateSession().then((response =>{  
    cy.request({
        method: "GET",
        url: ENDPOINT_GET_ROOMS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        const responseAsString = JSON.stringify(response)
        expect(responseAsString).not.to.be.empty
        

    }))
    }))
}



//Function to add new room (testcase 04)
function createRoomRequest(cy){
    cy.authenticateSession().then((response =>{
        const payload = {
            "features":["sea view,balcony"],
            "category":"single",
            "number":"241",
            "floor":"2",
            "available":"true",
            "price":"2000"
        } 
        
        // post request to create a room
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_ROOM,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:payload 
        }).then((response =>{               
           expect(response.status).to.eq(200) 
           getAllRoomsRequestAfterInsertion(cy,payload)
        }))
        
        
    }))
}


//Function to add and edit new room (testcase 05)
function editRoomRequest(cy){
    cy.authenticateSession().then((response =>{
        const payload = {
            "features":["sea view,balcony"],
            "category":"single",
            "number":"241",
            "floor":"2",
            "available":"true",
            "price":"2000"
        } 
        
        // post request to create a room
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_ROOM,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:payload 
        }).then((response =>{               
           expect(response.status).to.eq(200) 
           const editPayload = {
            "features":["sea view,balcony"],
            "category":"single",
            "number":"241",
            "floor":"2",
            "available":"true",
            "price":"2500",
            "id":response.body.id,
            "created":response.body.created
            } 
            cy.request({
                method: "PUT",
                url: ENDPOINT_GET_ROOM+response.body.id,
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body:editPayload 
            }).then((response =>{               
               expect(response.status).to.eq(200) 

               getAllRoomsRequestAfterInsertion(cy,editPayload)
        }))
    }))     
        
    }))
}
   

// Function to get all clients after insertion (using allready generated login token)
function getAllRoomsRequestAfterInsertion(cy, payload){
   
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_ROOMS,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            expect(JSON.stringify(response.body[response.body.length -1])).to.have.string(payload["price"])
            expect(JSON.stringify(response.body[response.body.length -1])).to.have.string(payload['floor'])
            expect(JSON.stringify(response.body[response.body.length -1])).to.have.string(payload['features'])
            expect(JSON.stringify(response.body[response.body.length -1])).to.have.string(payload['number'])
            

        }))
    }


module.exports = {
    getAllRoomsRequest,
    createRoomRequest,
    editRoomRequest
}