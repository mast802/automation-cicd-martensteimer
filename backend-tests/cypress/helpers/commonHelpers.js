const LOGOUT_URL = 'http://localhost:3000/api/logout'

//  Log out
function logoutRequest(cy){
    cy.request({
        method: "POST",
        url: LOGOUT_URL,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
        }).then((response =>{
            expect(response.body).to.include('OK')

        }))
    
}

module.exports = {
   logoutRequest
}