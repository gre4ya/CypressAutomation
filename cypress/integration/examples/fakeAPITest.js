describe('API Intercept practise', function()
{

    it('First Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept(
            {
                method : 'GET',
                url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },

            {
                statusCode : 200,
                body : [
                           {
                            "book_name": "null",
                            "isbn": "SPY40",
                            "aisle": "2529857"
                            }
                        ]
            }).as('bookretrievals')

            cy.get('.btn.btn-primary').click()

            cy.wait('@bookretrievals')

            cy.get('p').should('have.text', 'Oops only 1 Book available')
        })

    
})