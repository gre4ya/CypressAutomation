
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
        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)

        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2') // minlength attribute validation
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','required')
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','type','text') // input type validation

        cy.get('#inlineRadio3').should('be.disabled') // cy.get('#inlineRadio3').should('have.attr','disabled')

        cy.get('li[class="nav-item"]:nth-child(2) a').click()
        
        cy.selectProduct(this.data.itemName)

        



        

        


    })


})