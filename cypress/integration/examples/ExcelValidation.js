
let productName
let orderNumber

describe('JWT Session', ()=>{

    it('is logged in throught local storage', async () => {

        cy.LoginAPI().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/client", 
            {
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
            cy.get(".card-body b").eq(1).then(function(name) 
            {
                productName = name.text();
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
            cy.get("label[class='ng-star-inserted']").then(function(order) 
            {   // | 645d6572568c3e9fb169ff4a |
                orderNumber = order.text().match(/[0-9a-z]+/) // regex to match only digits and letters lower case
                cy.log(orderNumber) // 645d6572568c3e9fb169ff4a
            })
            cy.get(".order-summary button").contains('Excel').click();
 
            const filePath = Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_gre4ya.xlsx'
            
            cy.task('excelToJsonConverter', filePath).then(function(result)
            {
                cy.log(result)
                let actOrderNumber = result.data[1].A
                let actProductName = result.data[1].B
                expect(orderNumber[0]).to.equal(actOrderNumber)
                expect(productName).to.equal(actProductName)
            })
            
        })
    })
})