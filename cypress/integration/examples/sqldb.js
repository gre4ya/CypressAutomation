context('Window', () => {
let data
    it('Database Interaction', () => {
        cy.sqlServer("select * from Persons").then(function(results)
        {
            data = results
            console.log(data[0][1]) // Mike
            console.log(data[1][2]) // Sanders
        })

    })
})