/// <reference types="cypress" />

import * as targets from '../targets/targets'
import * as indexFunctions from '../pages/indexPage'
import * as dashbordFunctions from '../pages/dashboardPage'
import * as roomFunctions from '../pages/rooms/veiwRoomsPage'
import * as addRoomFunctions from '../pages/rooms/newRoomPage'
import * as editRoomFunctions from '../pages/rooms/editRoomPage'
import * as clientFunctions from '../pages/clients/viewClients'


//Test suite
describe('Virtual regression test using page objects', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        cy.contains('Login')
    })
    



    //Test case 05: Edit single room
    it("Edit single room", function(){
        cy.percySnapshot('login')
        indexFunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        cy.contains('Reservations')
        cy.percySnapshot('dashbord')
        dashbordFunctions.veiwRooms(cy,'Rooms')
        cy.percySnapshot('view_rooms')
        roomFunctions.createRoom(cy, 'New Room')
        cy.percySnapshot('new_room')
        addRoomFunctions.addNewRoom (cy, 'Single', '224', '2', '1250', ['Balcony', 'Sea View'])
        roomFunctions.assertLastElementRoomTitle(cy, 'Room 224')
        roomFunctions.assertLastElementRoomPrice(cy, '1250')
        roomFunctions.editLastRoom(cy)
        cy.percySnapshot('edit_room')
        editRoomFunctions.editPrice(cy,'2500')
        roomFunctions.assertLastElementRoomTitle(cy, 'Room 224')
        roomFunctions.assertLastElementRoomPrice(cy, '2500')
        roomFunctions.backToDashboard(cy, 'Tester Hotel Overview')
        dashbordFunctions.performLogout(cy, 'Login')
    
    })

   

})