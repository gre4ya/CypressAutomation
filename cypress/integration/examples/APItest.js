describe('API Intercept practise', function()
{
    it('First Test Case', function(){
    
        cy.request('POST', 'https://216.10.245.166/Library/Addbook.php', {
            "name":"Cypress is not fun",
            "isbn":"kom",
            "aisle":"910",
            "author":"AG King"
        }).then(function(response)
    {
        expect(response.body).to.have.property('Msg','successfully added')
        expect(response.status).to.eq(200)
    })
})
})