class CheckoutPage
{
    checkoputButton()
    {
        return cy.get('button.btn.btn-success')
    }
    continueShoppingButton()
    {
        return cy.get('button.btn.btn-default')
    }
    listOfTotalPrices()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    totalPrice()
    {
        cy.get('h3 strong').then(function(allPrice)
        {
         let fullPrice = parseInt(allPrice.text().substring(3))
        })
        return
    }
}

export default CheckoutPage;