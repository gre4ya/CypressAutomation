//cypress - Spec
//<reference types= "Cypress" />
describe('My Seventh Test Suite', function(){
    it('My SeventhTest case', function(){
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () => {
                cy.get('div.sub-menu-bar a[href*="about"]').click()
                cy.go('back')
                cy.go('back')
            })
        })
    })
})