class ProductsPage
{
    getCheckoutButton()
    {
        return cy.get('a.btn-primary')
    }
}

export default ProductsPage;