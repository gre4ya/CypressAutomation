//cypress - Spec
//<reference types= "Cypress" />
describe('My Sixth Test Suite', function()
{
    it('My SixthTest case', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        // cy.contains('Top').click({force: true}) -> {force: true} is used as argumernt in .click() method to click on hidden elements
        cy.url().should('include','top')


    })


})