//cypress - Spec
//<reference types= "Cypress" />
describe('My Third Test Suite', function()
{
    it('My ThirsTest case', function(){

        cy.visit(Cypress.env('url') + '/AutomationPractice/')


        // CHECKBOXES

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2', 'option3']) // check multiple checkboxes

        // DROPDOWNS

        // Static Dropdown

        cy.get('select').select('option2').should('have.value','option2')  // value

        // Dynamic Dropdown

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==='India')
            {
                cy.wrap($el).click() 
            }
       
        })

        cy.get('#autocomplete').should('have.value','India')

        // validating visible/invisible elements

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()

        cy.get('#displayed-text').should('be.visible')



        // Radio Buttons

        cy.get('[value="radio1"]').should('not.be.checked')
        cy.get('[value="radio2"]').should('not.be.checked')
        cy.get('[value="radio3"]').should('not.be.checked')
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio3"]').check().should('be.checked')
        cy.get('[value="radio2"]').should('not.be.checked')

    })

    
})