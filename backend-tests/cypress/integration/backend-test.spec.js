import * as clientHelpers from '../helpers/clientHelpers'
import * as roomHelpers from '../helpers/roomHelpers'
import * as commonHelpers from '../helpers/commonHelpers'

/// <reference types="cypress" />

describe('Backend test suite', function(){

    it('Testcase 03 - View rooms', function(){
        roomHelpers.getAllRoomsRequest(cy)
        commonHelpers.logoutRequest(cy)
    })
    
    it('Testcase 04 - Create new room', function(){
        roomHelpers.createRoomRequest(cy)
        commonHelpers.logoutRequest(cy)
    })

    it('Testcase 05 - Edit room', function(){
        roomHelpers.editRoomRequest(cy)
        commonHelpers.logoutRequest(cy)
    })
    
    it('Test case 08 - Create client', function(){
        clientHelpers.createClientRequest(cy)
        commonHelpers.logoutRequest(cy)
    })

    it('Test case 10 - Delete client', function(){
        clientHelpers.deleteClientRequest(cy)
        commonHelpers.logoutRequest(cy)
    })
})