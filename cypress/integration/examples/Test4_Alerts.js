//cypress - Spec
//<reference types= "Cypress" />
describe('My Fourth Test Suite', function()
{
    it('My FourthTest case', function(){

        // cypress has an ability ti fire browser events
        // window:alert is an event that is fired when alert opens
        // so we fire the event through cypress to get the access to that alert

        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

// ALERT

        // here we caprure the promise and resolve it
         cy.on('window:alert',(str) =>
         {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
         })

// CONFIRM

         // here we caprure the promise and resolve it
         cy.on('window:confirm',(str) =>
         {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
         })

// Child window handling

        cy.get('#opentab').invoke('removeAttr','target').click()  

        // cy.origin('http://www.qaclickacademy.com', ()=>
        //         {
        //             cy.url().should('include','qaclickacademy')
        //             cy.go('back')
                
        //         })  
    })
})