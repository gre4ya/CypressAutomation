

import 'cypress-iframe'
describe('My Nineth Test Suite', function(){

    before(function(){
        // this code wil be executed once before all the tests in the block
        cy.fixture('example').then(function(data)
        {
    this.data = data
        })
    })

    it('Framework', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('select').select(this.data.gender)

        

        


    })


})