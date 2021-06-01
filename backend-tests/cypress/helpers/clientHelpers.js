import * as commonHelpers from './commonHelpers'

const faker = require('faker')

const ENDPOINT_GET_CLIENTS = 'http://localhost:3000/api/clients'
const ENDPOINT_POST_CLIENT = 'http://localhost:3000/api/client/new'
const ENDPOINT_GET_CLIENT = 'http://localhost:3000/api/client/'

// Function to generate client Payload
function createRandomClientPayload(){
    const randomName = faker.name.findName()
    const randomEmail = faker.internet.email()
    const randomPhone = faker.phone.phoneNumber()

    const payload = {
        "name":randomName,
        "email":randomEmail,
        "telephone":randomPhone
    }

    return payload
}

//Delete last index, after adding a new client (testcase 10)
function deleteClientRequest(cy){
    cy.authenticateSession().then((response =>{
        let clientPayload = createRandomClientPayload() 
        
        // post request to create a client
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_CLIENT,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:clientPayload 
        }).then((response =>{               
           expect(response.status).to.eq(200) 
           getAllClientsRequestAfterInsertion(cy, clientPayload.name, clientPayload.email, clientPayload.telephone)
           let lastId = response.body.id
           cy.log(lastId)
           cy.request({
                method:"DELETE",
                url: ENDPOINT_GET_CLIENT+lastId,
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                
                }).then((response =>{               
                    expect(response.status).to.eq(200) 
            }))
        
        }))
    }))
        
    }



// Function to get all clients after insertion (using allready generated login token)
function getAllClientsRequestAfterInsertion(cy, name, email, telephone){
   
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_CLIENTS,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response)
            expect(responseAsString).to.have.string(name)
            expect(responseAsString).to.have.string(email)
            expect(responseAsString).to.have.string(telephone)

        }))
    }

//Add a client using random data
function createClientRequest(cy){
    cy.authenticateSession().then((response =>{
        let clientPayload = createRandomClientPayload() 
        
        // post request to create a client
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_CLIENT,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:clientPayload 
        }).then((response =>{               
           expect(response.status).to.eq(200) 
           getAllClientsRequestAfterInsertion(cy, clientPayload.name, clientPayload.email, clientPayload.telephone)
           commonHelpers.logoutRequest(cy)
        }))
        
        
    }))
}






   

module.exports = {
    
    createClientRequest, 
    deleteClientRequest
}