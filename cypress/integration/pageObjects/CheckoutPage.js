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
        return cy.get('h3 strong')
    }
}

export default CheckoutPage;