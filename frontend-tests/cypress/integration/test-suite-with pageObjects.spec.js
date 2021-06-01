/// <reference types="cypress" />

import * as targets from '../targets/targets'
import * as indexFunctions from '../pages/indexPage'
import * as dashbordFunctions from '../pages/dashboardPage'
import * as roomFunctions from '../pages/rooms/veiwRoomsPage'
import * as addRoomFunctions from '../pages/rooms/newRoomPage'
import * as editRoomFunctions from '../pages/rooms/editRoomPage'
import * as clientFunctions from '../pages/clients/viewClients'


//Test suite
describe('Test suite using page objects', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        cy.contains('Login')
    })
    
    //Test case 02: perform login
    it('Perform valid login/logout', function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashbordFunctions.performLogout(cy, 'Login')

    })


    //Test case 03: Veiw rooms
    it("View rooms", function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashbordFunctions.veiwRooms(cy,'Rooms')
        roomFunctions.backToDashboard(cy, 'Tester Hotel Overview')
        dashbordFunctions.performLogout(cy, 'Login')

    })

    //Test case 04: Create single room
    it("Create room", function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashbordFunctions.veiwRooms(cy,'Rooms')
        roomFunctions.createRoom(cy, 'New Room')
        addRoomFunctions.addNewRoom (cy, 'Single', '223', '2', '1250', ['Balcony', 'Sea View'])
        roomFunctions.assertLastElementRoomTitle(cy, 'Room 223')
        roomFunctions.backToDashboard(cy, 'Tester Hotel Overview')
        dashbordFunctions.performLogout(cy, 'Login')
        
    })


    //Test case 05: Edit single room
    it("Edit single room", function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashbordFunctions.veiwRooms(cy,'Rooms')
        roomFunctions.createRoom(cy, 'New Room')
        addRoomFunctions.addNewRoom (cy, 'Single', '224', '2', '1250', ['Balcony', 'Sea View'])
        roomFunctions.assertLastElementRoomTitle(cy, 'Room 224')
        roomFunctions.assertLastElementRoomPrice(cy, '1250')
        roomFunctions.editLastRoom(cy)
        editRoomFunctions.editPrice(cy,'2500')
        roomFunctions.assertLastElementRoomTitle(cy, 'Room 224')
        roomFunctions.assertLastElementRoomPrice(cy, '2500')
        roomFunctions.backToDashboard(cy, 'Tester Hotel Overview')
        dashbordFunctions.performLogout(cy, 'Login')
    
    })

    //Test case 07: Veiw clients
    it("View clients", function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashbordFunctions.veiwClients(cy,'Clients')
        clientFunctions.backToDashboard(cy, 'Tester Hotel Overview')
        dashbordFunctions.performLogout(cy, 'Login')
        
})

})