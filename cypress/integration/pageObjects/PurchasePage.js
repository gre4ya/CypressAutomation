class PurchasePage
{
    deliveryLocationInputBox()
    {
        return cy.get('#country')
    }
    suggestionBox()
    {
        return cy.get('.suggestions a')
    }
    termAndConditionsCheckBox()
    {
        return cy.get('#checkbox2')
    }
    purchaseButton()
    {
        return cy.get('.btn.btn-success')
    }
    confirmationSuccessMessage()
    {
        return cy.get('.alert.alert-success')
    }
}
export default PurchasePage