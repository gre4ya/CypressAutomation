class HomePage
{
    getNameInputBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding()
    {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEmailInputBox()
    {
        return cy.get('input[name="email"]')
    }
    
    getGender()
    {
        return cy.get('select')
    }

    getEntrepreneur()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.get('li.nav-item:nth-child(2) a')
    }

}

export default HomePage;