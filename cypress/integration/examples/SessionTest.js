describe('JWT Session', ()=>{
    it('is logged in throught local storage', () => {
        cy.LoginAPI().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/client", 
            {
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })

            cy.get('.card-body button:last-of-type').eq(1).click();
            cy.get("[routerlink*='cart']").click();
            cy.contains('Checkout').click();

            cy.get("[placeholder*='Country']").type("ind")
            cy.get(".ta-results button").each(($el, index, $list) =>
            {
                if($el.text().trim() === 'India')
                {
                    cy.wrap($el).click();
                }
            })
            cy.get(".action__submit").click();
            cy.wait(2000);
            cy.contains('CSV').click();



        })
    })
})