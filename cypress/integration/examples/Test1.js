//cypress - Spec
//<reference types= "Cypress" />
describe('My first Test Suite', function()
{
    it('My FirstTest case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        // parent-child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        // cy.get(':nth-child(3) > .product-action > button').click() -> without parent-child chaining
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
        {
            console.log('Text from console.log') // this is non-cypress command so it needs to be handld explicitly with .then()
        })

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
            cy.wrap($el).find('button').click() 
            }
       
        })
        // cypress has an inbuild ability to resolve promisses between cypress methods implicitly but 
        // non-cypress methods needs to be handled explicitly using .then() method
        cy.get('.brand').then(function(logoelement)
        {
        cy.log(logoelement.text())  // text() is not cypress command  
        }) 
        // cy.log(logo.text())

    })




})